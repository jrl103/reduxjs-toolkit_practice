import { createSlice } from "@reduxjs/toolkit";

// Reducer
const userSlice = createSlice({
    subject:"제목"
  },
  reducers: {
    changeUser: (state, action) => {
        state.subject = "하하"
    },
  },
});


export const { changeUser } = userSlice.actions;

export default userSlice.reducer;

