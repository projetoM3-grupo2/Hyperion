import { useContext } from "react";
import { UserContext } from "../../Providers/UserContext/UserContext";
import { GenericAvatar } from "../Avatar";
import { IconBtn } from "../IconButton";
import { GrCart } from "react-icons/gr";
import { HeaderContainer } from "./style";
import { Link, useNavigate } from "react-router-dom";

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
        <IconBtn selectedIcon={<GrCart color="white" />} />
        {user ? (
          <GenericAvatar />
        ) : (
          <>
            <button onClick={() => navigate("/register")}>Cadastrar</button>
            <button onClick={() => navigate("/login")}>Login</button>
          </>
        )}
      </nav>
    </HeaderContainer>
  );
};
