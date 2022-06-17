import { configureStore } from "@reduxjs/toolkit";

import practice from "./modules/preacticeSlice"
import user from "./modules/userSlice"
import post from "./modules/postSlice"

const store = configureStore({ 
    reducer: { practice, user, post} // <== 안에 원하는 데이터 쌓아나가기
});



export default store;
