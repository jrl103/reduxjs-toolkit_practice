import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import {changeTest} from "./redux/modules/preacticeSlice";

function App() {
  const dispatch = useDispatch();
  const test = useSelector((state) => state.practice)

  useEffect(() => {
    dispatch(changeTest());
  },[])

  useEffect(() => {
    console.log(test);
  },[test])

  return (
    <div>

    </div>
  );
}

export default App;
