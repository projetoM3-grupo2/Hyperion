import { useContext } from "react";
import { UserContext } from "../../Providers/UserContext/UserContext";
import { GenericAvatar } from "../Avatar";
import { IconBtn } from "../IconButton";
import {AiOutlineShoppingCart} from 'react-icons/ai'

export const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>Hyperion</h1>
      <nav>
        <IconBtn selectedIcon={<AiOutlineShoppingCart/>}/>
        {user ? <GenericAvatar /> : <button>Cadastrar</button> && <button>Login</button>}
      </nav>
    </div>
  );
};
