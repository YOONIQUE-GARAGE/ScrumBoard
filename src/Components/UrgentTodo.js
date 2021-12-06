import React from 'react';
import './Lists.css';
const UrgentTodos = ({urgent}) => {
  // 이전List로 돌아가는 기능 넣어보기
  return (
    <li className='urgent_container'>
      <div className='urgent'>{urgent.text}</div>
      <button className="backHistory_Btn">Back</button>
    </li>
  )
}

export default UrgentTodos;