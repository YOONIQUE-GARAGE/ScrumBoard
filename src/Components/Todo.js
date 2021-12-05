import React from 'react';
import './Todo.css';
const Todo = ({todo = {}, delFunc, ingFunc, urgentFunc}) => {
  // 한개의 todo 구성(todo + 버튼 2개)
  const { id, text } = todo;
  return(
  <li className="todo_container">
    <div className="todo">{text}</div>
    <button className="emergency_button" onClick={() => urgentFunc(id, 'todo')}>Urgent</button>
    <button className="next_button" onClick={() => ingFunc(id, 'todo')}>Next</button>
    <button className="del_button" onClick={() => delFunc(id, 'todo')}>Del</button>
  </li>
  )
}

export default Todo;