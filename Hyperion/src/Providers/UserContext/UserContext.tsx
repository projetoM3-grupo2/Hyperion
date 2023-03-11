import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../Services/api";
import {
  IDefaultProvidersProps,
  IUser,
  IUserContext,
  IUserRegister,
} from "./@types";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IDefaultProvidersProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    const id = localStorage.getItem("@USERID");
    const userAutoLoad = async () => {
      if (token) {
        try {
          const response = await api.get(`/users/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          setUser(response.data);
          return navigate("/dashboard");
        } catch (error) {
          console.log(error);
          localStorage.removeItem("@TOKEN");
          return navigate("/");
        } finally {
          return setLoading(false);
        }
      }
    };

    userAutoLoad();
  }, [user]);

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
      localStorage.setItem("@TOKEN", response.data.accessToken);
      localStorage.setItem("@USERID", response.data.user.id);
      console.log(response.data);
      if (response.data) {
        navigate("/dashboard");
      }
      toast.success("Usuário logado com sucesso!");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const userLogout = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    navigate("/");
    toast.success("Usuário deslogado com sucesso!");
  };

  return (
    <UserContext.Provider
      value={{ userLogin, userLogout, userRegister, user, navigate }}
    >
      {children}
    </UserContext.Provider>
  );
};
