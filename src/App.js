import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSubject, changeContent } from "./redux/modules/postSlice";
import { changeTest } from "./redux/modules/preacticeSlice";
import { changeUser } from "./redux/modules/userSlice";

function App() {
  const dispatch = useDispatch();

  // configStore에 있는 reducer 가져오는 거임
  const test = useSelector((state) => state.practice);
  const user = useSelector((state) => state.user);
  const post = useSelector((state) => state.post);
  
  const inputRef1 = useRef(null)
  const inputRef2 = useRef(null)

  useEffect(() => {
    dispatch(changeTest());
    dispatch(changeUser());
    // dispatch(changePost());
     // dispatch(changePost({subject: "안녕하세요", content: "내용 바꿨어요"}));
  }, []);

  useEffect(() => {
    // console.log(test);
  }, [test]);

  useEffect(() => {
    // console.log(user);
  }, [user]);

  useEffect(() => {
    // console.log(post);
  }, [post]);

  const changeSub = (e) => {
    // console.log("test") --> 1. 버튼 작동하는지 보기 
    // console.log(inputRef.current.value) --> 2. 인풋값 받아오는지 보기
    // 3. dispatch 기능 되는지 체크
    // 4. 다 합쳐서 적용
    dispatch(changeSubject(inputRef1.current.value))
  }

  const changeCon = (e) => {
    dispatch(changeContent(inputRef2.current.value))
  }
  return (
    <div>
      <div>{post.subject}</div>
      <div>{post.content}</div>
      <div>{post.creatAt}</div>
      <input type="text" ref={inputRef1}/>
      <button onClick={changeSub}>제목 변경</button>
      <input type="text" ref={inputRef2}/>
      <button onClick={changeCon}>내용 변경</button>
    </div>
  );
}

export default App;
