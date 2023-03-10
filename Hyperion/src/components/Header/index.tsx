import { useContext } from "react";
import { UserContext } from "../../Providers/UserContext/UserContext";
import { GenericAvatar } from "../Avatar";
import { IconBtn } from "../IconButton";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { HeaderContainer } from "./style";
import { Link, useNavigate } from "react-router-dom";
import { IconContext } from "react-icons";

export const Header = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <div>
        <Link to={"/"}>Home</Link>
        <Link className="gamestore" to={"/"}>
          GameStore
        </Link>
        <Link to={"/"}>News</Link>
      </div>
      <nav>
        <div className="cartContainer">
          <IconBtn
            selectedIcon={
              <IconContext.Provider value={{color: "white", size: '25px' }}>
                <HiOutlineShoppingCart />
              </IconContext.Provider>
            }
          />
          <span>
            <p>9</p>
          </span>
        </div>
        {user ? (
          <GenericAvatar />
        ) : (
          <div className="btnsLogReg">
            <button onClick={() => navigate("/register")}>Cadastrar</button>
            <button onClick={() => navigate("/login")}>Login</button>
          </div>
        )}
      </nav>
    </HeaderContainer>
  );
};
