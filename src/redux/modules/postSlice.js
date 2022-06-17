import { createSlice } from "@reduxjs/toolkit";

// Reducer
const postSlice = createSlice({
  name: "practice",
  initialState: {
    subject:"제목",
    content:"내용"
  },
  reducers: {
    changeSubject: (state, action) => {
        state.subject = action.payload
    },
    changeContent: (state, action) => {
        state.content = action.payload
    },

  },
});


export const { changeSubject, changeContent} = postSlice.actions;

export default postSlice.reducer;

/*
 $ yarn add @reduxjs/toolkit
 $ git add .
 $ git commit -m "리덕스 기본 코드" --> 소스트리에 올라감
 */
