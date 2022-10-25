import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostData } from "../types/PostData";

const initialState: Array<PostData> = [
  {
    name: "yamada",
    post: "hello",
  },
  {
    name: "tanaka",
    post: "hello",
  },
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action:PayloadAction<PostData>) => {
      state.push(action.payload);
    },
  },
});

export default postSlice.reducer;
export const { addPost } = postSlice.actions;
