import { configureStore } from "@reduxjs/toolkit";

import practice from "./modules/preacticeSlice"

const store = configureStore({ 
    reducer: { practice } // <== 안에 원하는 데이터 쌓아나가기
});



export default store;
