import React, { useState } from "react";

const TodoForm = ({ addtodo }) => {
  // 새로운 todo를 작성할 수 있도록 useState이용해보기
  const [todoVal, setTodoVal] = useState("");
  // useState 상태 변경 함수들
  const handleChangeTodo = (event) => {
    setTodoVal(event.target.value);
  };

  // 버튼누르면 작동하는 함수 만들기
  const handleSubmit = () => {
    // state 끌어올리기
    // 버튼클릭시 props로 받은 부모의 함수를 호출한다.(콜백함수개념)
    // addtodos함수에서 todos에 추가가 일어난다.
    addtodo(todoVal);
  };

  return (
    <div className="todoFrom_wrapper">
      <div className="todoForm_inputContainer">
        <div className="todoForm_innerWrapper">
          <input
            type="text"
            className="todoForm_input_todo"
            placeholder="What to do?"
            onChange={handleChangeTodo}
          ></input>
        </div>
        <div className="todoForm_submit">
          <button className="todoForm_submitButton" onClick={handleSubmit}>
            button
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoForm;
