import React from 'react';
import './Todo.css';
const Todo = ({todos = []}) => {
  // 한개의 todo 구성(todo + 버튼 2개)
  return(
  <li className="todo_container">
    <div className="todo">{todos.text}</div>
    <button className="emergency_button">우선</button>
    <button className="next_button">다음단계로</button>
  </li>
  )
}

export default Todo;