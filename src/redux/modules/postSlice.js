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
    changeSubject: (state, action) => {
       state.subject = action.payload; 
       console.log(action.payload)
    },
    changeContent: (state, action) => {
       state.content = action.payload; 
       console.log(action.payload)
    },
  },
});

export const { changeSubject, changeContent } = postSlice.actions;

export default postSlice.reducer;


