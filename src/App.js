import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePost } from "./redux/modules/postSlice";
import { changeTest } from "./redux/modules/preacticeSlice";
import { changeUser } from "./redux/modules/userSlice";

function App() {
  const dispatch = useDispatch();
  const test = useSelector((state) => state.practice);
  const user = useSelector((state) => state.user);
  const post = useSelector((state) => state.post);
  const inputRef = useRef(null)
  // configStore에 있는 reducer 가져오는 거임

  useEffect(() => {
    dispatch(changeTest());
    dispatch(changeUser());
    dispatch(changePost({subject: "안녕하세요", content: "내용 바꿨어요"}));
  }, []);

  useEffect(() => {
    console.log(test);
  }, [test]);

  useEffect(() => {
    console.log(user);
  }, [user]);

  useEffect(() => {
    console.log(post);
  }, [post]);

  return (
    <div>
      <div>{post.subject}</div>
      <div>{post.content}</div>
      <div>{post.creatAt}</div>
      <input type="text" ref={inputRef}/>
      <button>변경</button>
    </div>
  );
}

export default App;
