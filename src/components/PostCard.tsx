import { VStack, Box, Heading } from "@chakra-ui/react";
import { FC } from "react";
import { PostData } from "../types/PostData";

const PostCard: FC<PostData> = (props) => {
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
