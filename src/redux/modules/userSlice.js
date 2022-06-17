import { createSlice } from "@reduxjs/toolkit";

// Reducer
const userSlice = createSlice({
  name: "user",
  initialState: {
    username : "이름"
  },
  reducers: {
    changeUser: (state, action) => {
        state.username = "하하"
    },
  },
});


export const { changeUser } = userSlice.actions;

export default userSlice.reducer;

