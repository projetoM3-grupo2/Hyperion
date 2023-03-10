import { createContext, useState } from "react";
import { api } from "../../Services/api";
import { IDefaultProvidersProps } from "../UserContext/@types";
import { ICategories, IGames } from "./@types";

export const GameContext = createContext({});

export const GameProvider = ({ children }: IDefaultProvidersProps) => {
  const [games, setGames] = useState<IGames[]>([]);
  const [categories, setCategories] = useState<ICategories[]>([]);

  const getGames = async () => {
    try {
      const response = await api.get("/products");
      setGames(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCategories = async () => {
    try {
      const response = await api.get("/categories");
      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <GameContext.Provider value={{ games, categories }}>
      {children}
    </GameContext.Provider>
  );
};
