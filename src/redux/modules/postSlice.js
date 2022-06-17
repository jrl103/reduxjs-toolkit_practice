import { createSlice } from "@reduxjs/toolkit";

// Reducer
const postSlice = createSlice({
  name: "post",
  initialState: {
    id:1,
    subject:"제목",
    content:"내용",
    creatAt:"2015-05-15"
  },
  reducers: {
    changePost: (state, action) => {
       state.subject = action.payload.subject; 
       state.content = action.payload.content; 
    },
  },
});

export const { changePost } = postSlice.actions;

export default postSlice.reducer;


