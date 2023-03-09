import { IconButton } from "@chakra-ui/react";
import { IIconButtonProps } from "./type";

export const IconBtn = ({selectedIcon}:IIconButtonProps) => {
  return (
    <IconButton
      variant="outline"
      colorScheme="pink.500"
      aria-label="Call Sage"
      fontSize="20px"
      icon={selectedIcon}
    />
  );
};
