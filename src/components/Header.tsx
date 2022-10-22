import { Flex } from "@chakra-ui/react";
import { FC } from "react";

type Props = {
  children: string;
};

const Header: FC<Props> = ({ children }) => {
  return (
    <Flex bgColor="teal.500" color="white" h="60px" fontWeight="bold" fontSize={20} alignItems="center" justifyContent="center">
      {children}
    </Flex>
  );
};

export default Header;
