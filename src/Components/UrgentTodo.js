import React from 'react';
import './Urgent.css';
const UrgentTodos = ({urgent}) => {
  return (
    <li className='urgent_container'>
      <div className='urgent'>{urgent.text}</div>
    </li>
  )
}

export default UrgentTodos;