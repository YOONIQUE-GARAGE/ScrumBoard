import React from 'react';
import './Lists.css';

const ingTodo = ({ing, delFunc, urgentFunc, testFunc}) => {
  console.log({ing});
  const { text, id } = ing;
  return (
    <li className='ing_container'>
      <div className='ing'>{text}</div>
      <button className="emergency_button" onClick={() => urgentFunc(id, 'ing')}>Urgent</button>
      <button className="next_button" onClick={() => testFunc(id, 'ing')}>Next</button>
      <button className="del_button" onClick={() => delFunc(id, 'ing')}>Del</button>
    </li>
  )
}

export default ingTodo;