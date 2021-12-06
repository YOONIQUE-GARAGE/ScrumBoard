import React from 'react';
import './Lists.css';

const TestTodo = ({test={}}) => {
  return (
    <li className='test_container'>
      <div className='test'>{test.text}</div>
      <button className="finish_button">Finish</button>
    </li>
  )
}

export default TestTodo;