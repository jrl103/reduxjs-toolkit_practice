import { createSlice } from "@reduxjs/toolkit";

// Reducer
const practiceSlice = createSlice({
  name: "practice",
  initialState: {
    name:"hello",
    number:7
  },
  reducers: {
    changeTest: (state, action) => {
      // 작동시킬 기능명
      //  initialState
      /* state.test = true; // 바로 바꿔버릴 수도 있음 */
      state.name = "hi"
    },
  },
});


// 위에 있는 practiceSlice의 값을 사용
// 파일 외부에서 할거면 export 필요 !
export const { changeTest } = practiceSlice.actions;

export default practiceSlice.reducer;

/*
 $ yarn add @reduxjs/toolkit
 $ git add .
 $ git commit -m "리덕스 기본 코드" --> 소스트리에 올라감
 */
