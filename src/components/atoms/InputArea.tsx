import { FC } from "react";
import { Input } from "@chakra-ui/react";

type Props = {
  name ?:string
  post ?:string
  placeholdername : string
  width : number
  onChange : (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputArea: FC<Props> = (props) => {
  const { name, post, onChange, width, placeholdername } = props;
  return (
    <Input
      h={10}
      w={width}
      shadow="md"
      bgColor="white"
      placeholder={placeholdername}
      value={name || post}
      onChange={onChange}
    ></Input>
  );
};

export default InputArea;
