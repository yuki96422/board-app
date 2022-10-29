import { Button } from "@chakra-ui/react";
import { FC } from "react";

// type Props = {
//   children: string
//   onClick:()=>void
// };

// const MainButton: FC<Props> = (props) => {
//   const { children, onClick } = props;
//   return (
//     <Button bgColor="teal.500" color="white" w={100} h={35} _hover={{ opacity: 0.6 }} onClick={onClick}>
//       {children}
//     </Button>
//   );
// };

type Props = JSX.IntrinsicElements['button'] & { children:string }

const MainButton:FC<Props> = (props) => {
  const { children, ...rest } = props
  return (
    <Button {...rest} >{ children }</Button>
  )
}

export default MainButton;
