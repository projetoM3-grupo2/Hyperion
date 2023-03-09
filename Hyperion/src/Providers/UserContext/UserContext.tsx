import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../Services/api";
import { IDefaultProvidersProps, IUser, IUserContext, IUserRegister } from "./@types";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IDefaultProvidersProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();


  const userRegister = async (data: IUserRegister) => {
    try {
      const response = await api.post("/register", data);
      setUser(response.data);
      navigate("/dashboard");
      toast.success("Usuário registrado com sucesso!");
    } catch (error) {
      navigate("/");
    } finally {
      setLoading(false);
    }
  };


  const userLogin = async (formData: IUser) => {
    try {
      const response = await api.post("/login", formData);
      setUser(response.data);
      if(response.data.isAdmin){
        navigate("/dashboard");       
      }
      toast.success("Usuário logado com sucesso!");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const userLogout = () => {
    navigate("/");
    toast.success("Usuário deslogado com sucesso!");
  };

  return (
    <UserContext.Provider value={{ userLogin, userLogout, userRegister, user}}>
      {children}
    </UserContext.Provider>
  );
};
