import React, { useContext } from "react";
import { UserContext } from "../../Providers/UserContext/UserContext";
import { IconBtn } from "../IconButton";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { HeaderContainer } from "./style";
import { Link, useNavigate } from "react-router-dom";
import { IconContext } from "react-icons";
import {
  Avatar,
  AvatarBadge,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { IGames } from "../../Providers/GameContext/@types";

export const Header = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);
  const products =  JSON.parse(localStorage.getItem("@PRODUCTLIST") || '{}')
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
              <IconContext.Provider value={{ color: "white", size: "25px" }}>
                <HiOutlineShoppingCart onClick={onOpen} />
              </IconContext.Provider>
            }
          />
          <span>
            <p>9</p>
          </span>
        </div>
        {user ? (
          <Avatar
            size={"sm"}
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
          >
            <AvatarBadge boxSize="20px" bg="green.500" />
          </Avatar>
        ) : (
          <div className="btnsLogReg">
            <button onClick={() => navigate("/register")}>Cadastrar</button>
            <button onClick={() => navigate("/login")}>Login</button>
          </div>
        )}
      </nav>
      <>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent bg={"black"}>
            <DrawerCloseButton />
            <DrawerHeader fontWeight={"bold"}>
              "Carrinho de Compras"
            </DrawerHeader>
            <DrawerBody>
              {products.map((product:IGames)=> (
              <>
              <img src={product.image} alt="Imagem do Produto" />
              <h4>{product.name}</h4>
              <p>{product.price}</p>
              </>
              ))}
            </DrawerBody>
            <DrawerFooter>
              <Button
                variant="outline"
                mr={3}
                color="pink.900"
                onClick={onClose}
              >
                Close
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    </HeaderContainer>
  );
};
