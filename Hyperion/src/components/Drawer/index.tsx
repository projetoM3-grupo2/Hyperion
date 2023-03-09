import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { IGenericDrawerProps } from "./types";

export const GenericDrawer = ({
  bodyContent,
  header,
  place,
}: IGenericDrawerProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);
  return (
    <>
      <Button ref={btnRef} color="pink.900" onClick={onOpen}>
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement={place ? place : "right"}
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg={"black"}>
          <DrawerCloseButton />
          <DrawerHeader fontWeight={"bold"}>{header}</DrawerHeader>

          <DrawerBody>{bodyContent}</DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} color="pink.900" onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blackAlpha">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
