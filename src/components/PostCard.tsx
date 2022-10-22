import { VStack, Box, Heading } from "@chakra-ui/react";
import { FC } from "react";
type Props = {
  name: string;
  post: string;
};

const PostCard: FC<Props> = (props) => {
  const { name, post } = props;

  return (
    <VStack
      h={150}
      w={600}
      borderRadius={8}
      shadow="md"
      p={8}
      bgColor="white"
      position="relative"
    >
      <Heading size="md" mr="auto">
        {name}
      </Heading>
      <Box>{post}</Box>
    </VStack>
  );
};

export default PostCard;
