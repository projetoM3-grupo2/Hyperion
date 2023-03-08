import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../Services/api";


export const UserContext = createContext({});

export interface IDefaultProvidersProps {
    children: React.ReactNode;
  }

interface IUser {
    
}

export const UserProvider = ({ children }: IDefaultProvidersProps) => {
    const [user, setUser] = useState<IUser | null>(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

  const userLogin = async (formData) => {
    try {
      const response = await api.post("/login", formData);

      setUser(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const userLogout = () => {
    navigate("/");
  };

  return (
    <UserContext.Provider value={{userLogin, userLogout}}>
      {children}
    </UserContext.Provider>
  );
};
