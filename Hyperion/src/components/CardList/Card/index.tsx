import { ICardProps } from "../../../Providers/GameContext/@types";

export const Card = ({ product, addProduct }: ICardProps) => {
  return (
    <li>
      <img src={product.image} alt="game image" />
      <h4>{product.name}</h4>
      <span>{product.sistem}</span>
      <div>
        {product.categories.map((category) => (
          <span> {category.label} |</span>
        ))}
      </div>
      <div>
        <p>R$ {product.price}</p>
        <button>Comprar</button>
      </div>
    </li>
  );
};
