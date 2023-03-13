import React from "react";
import { ICardCartProps } from "../../../Providers/GameContext/@types";
import { StyledCardList } from "./style";

export const CardCartList = ({ product, removeProduct }: ICardCartProps) => {
  return (
    <StyledCardList key={product.id}>
      <img src={product.image} alt="Imagem do Produto" />
      <h4>{product.name}</h4>
      <p>{product.price}</p>
      <button onClick={() => removeProduct(product)}>
        <img src="" alt="" />
        Remover
      </button>
    </StyledCardList>
  );
};
