import { Avatar, AvatarBadge } from "@chakra-ui/react";

export const GenericAvatar = () => {
  return <Avatar size={'sm'} name="Dan Abrahmov" src="https://bit.ly/dan-abramov">
    <AvatarBadge boxSize="20px" bg="green.500" />
  </Avatar>;
};
