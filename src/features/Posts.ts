import { createSlice } from "@reduxjs/toolkit";

type PostData = {
  id: number;
  name: string;
  post: string;
};

const initialState:Array<PostData> = [{
  id:0,
  name:"yamada",
  post:"hello"
},{
  id:1,
  name:"tanaka",
  post:"hello"}]


const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload);
    },
  },
});

export default postSlice.reducer;