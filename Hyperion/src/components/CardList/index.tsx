import { useContext } from "react";
import { GameContext } from "../../Providers/GameContext/GameContext";
import { Card } from "./Card";

export const CardList = () => {
  const { games, addProduct } = useContext(GameContext);

  console.log(games);

  return (
    <ul>
      <>
        {games.map((product) => (
          <Card product={product} addProduct={addProduct} key={product.id} />
        ))}
      </>
    </ul>
  );
};
