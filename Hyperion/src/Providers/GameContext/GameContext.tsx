import { createContext, useState } from "react";
import { api } from "../../Services/api";
import { IDefaultProvidersProps } from "../UserContext/@types";
import { IGames } from "./@types";

export const GameContext = createContext({});

export const GameProvider = ({ children }: IDefaultProvidersProps) => {
  const [games, setGames] = useState<IGames[]>([]);

  const getGames = async () => {
    try {
      const response = await api.get("/products");
      setGames(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <GameContext.Provider value={{ games }}>{children}</GameContext.Provider>
  );
};
