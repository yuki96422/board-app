import { ChakraProvider, VStack } from "@chakra-ui/react";
import { useSelector } from "react-redux";

import { PostData } from "./types/PostData";
import PostCard from "./components/PostCard";
import Header from "./components/Header";
import theme from "./theme/theme";
import PostArea from "./components/PostArea";

interface PostDataObject {
  posts: Array<PostData>;
}

function App() {
  const postList = useSelector((state: PostDataObject) => state.posts);

  return (
    <ChakraProvider theme={theme}>
      <Header>React / Typescript掲示板アプリ</Header>
      <VStack>
        <PostArea />
        {postList.map((post,index) => (
          <PostCard key={index} name={post.name} post={post.post} />
        ))}
      </VStack>
    </ChakraProvider>
  );
}

export default App;
