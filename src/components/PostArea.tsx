import { Input, HStack } from "@chakra-ui/react";
import { FC, useCallback } from "react";

import PostButton from "./PostButton";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../features/Posts";

const PostArea: FC = () => {
  const [name, setName] = useState("");
  const [post, setPost] = useState("");
  const dispatch = useDispatch();
  const handleClick = useCallback(() => {
    dispatch(
      addPost({
        name: name,
        post: post,
      })
    );
    setName("");
    setPost("");
  }, []);

  const onChangePost = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setPost(e.target.value),
    []
  );
  const onChangeName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value),
    []
  );

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
        onChange={onChangeName}
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
        onChange={onChangePost}
      ></Input>
      <PostButton onClick={handleClick}>投稿</PostButton>
    </HStack>
  );
};

export default PostArea;
