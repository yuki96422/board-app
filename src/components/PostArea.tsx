import { Input, HStack } from "@chakra-ui/react";
import { FC } from "react";

import PostButton from "./PostButton";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../features/Posts";

const PostArea: FC = () => {
  const [name, setName] = useState("");
  const [post, setPost] = useState("");
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(
      addPost({
        name: name,
        post: post,
      })
    );
    setName("");
    setPost("");
  };

  return (
    <HStack m={10}>
      <Input
        h={10}
        w={150}
        shadow="md"
        bgColor="white"
        textAlign="left"
        display="inline-block"
        placeholder="名前"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></Input>
      <Input
        h={10}
        w={320}
        shadow="md"
        bgColor="white"
        textAlign="left"
        display="inline-block"
        placeholder="投稿内容"
        value={post}
        onChange={(e) => setPost(e.target.value)}
      ></Input>
      <PostButton onClick={() => handleClick()}>投稿</PostButton>
    </HStack>
  );
};

export default PostArea;
