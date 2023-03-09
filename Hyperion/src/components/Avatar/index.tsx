import { Avatar, AvatarBadge } from "@chakra-ui/react";

export const GenericAvatar = () => {
  return <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov">
    <AvatarBadge boxSize="1.25em" bg="green.500" />
  </Avatar>;
};
