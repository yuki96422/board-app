import { FC } from "react";
import { Input } from "@chakra-ui/react";

type Props = {
  name :string
  placeholdername : string
  width : number
  onChange : (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputArea: FC<Props> = (props) => {
  const { name, onChange, width, placeholdername } = props;
  return (
    <Input
      h={10}
      w={width}
      shadow="md"
      bgColor="white"
      placeholder={placeholdername}
      value={name}
      onChange={onChange}
    ></Input>
  );
};

export default InputArea;
