import { createContext } from "react";
export interface IDefaultProvidersProps {
    children: React.ReactNode;
  }
export const UserContext = createContext({})

export const UserProvider = ({ children }: IDefaultProvidersProps) => {

    return(
        <UserContext.Provider value={} >
            {children}
        </UserContext.Provider>
    )
}
