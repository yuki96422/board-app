import { HStack } from "@chakra-ui/react";
import { FC, useCallback, useState } from "react";

import MainButton from "../atoms/MainButton";
import { useDispatch } from "react-redux";
import { addPost } from "../../features/Posts";
import useErrorMessage from "../../hooks/useErrorMessage";
import InputArea from "../atoms/InputArea";

const PostArea: FC = () => {
  const [name, setName] = useState("");
  const [post, setPost] = useState("");
  const dispatch = useDispatch();
  const { showErrorMessage } = useErrorMessage();

  const handleClick = useCallback(() => {
    if (name === "" || post === "") {
      showErrorMessage({
        title: "入力されていない項目があります",
        status: "error",
        duration: 3000,
      });
      return;
    }
    dispatch(
      addPost({
        name,
        post,
      })
    );
    setName("");
    setPost("");
  }, [name, post]);

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
      <InputArea
        name={name}
        width={140}
        placeholdername="名前"
        onChange={onChangeName}
      />
      <InputArea
        post={post}
        width={340}
        placeholdername="投稿内容"
        onChange={onChangePost}
      />
      <MainButton onClick={handleClick} color="white" width={100} backgroundColor="teal" _hover={{ opacity: 0.7 }}>
        投稿
      </MainButton>
      <p></p>
    </HStack>
  );
};

export default PostArea;
