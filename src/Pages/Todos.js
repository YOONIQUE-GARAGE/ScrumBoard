import React, { useState } from 'react';
import { Component } from 'react';
import Todo from '../Components/Todo';
import './Todos.css';

const Todos = () => {
  // 새로운 todo를 작성할 수 있도록 useState이용해보기

  // useState 상태 변경 함수들

  return (
    <React.Fragment>
      <div className="todoForm_container">
        <div className="todoFrom_wrapper">
          <div className='todoForm_inputContainer'>
            <div className='todoForm_innerWrapper'>
              <input type="text" className='todoForm_input_todo' placeholder="What to do?"></input>
            </div>
            <div className='todoForm_submit'>
              <button className='todoForm_submitButton'>Move!!!</button>
            </div>
          </div>
        </div>
      </div>
      <ul className="Todos">
        {/* todo와 버튼들을 map으로 하나씩 구성하기 */}
        <Todo />
      </ul>
    </React.Fragment>
  );
}

export default Todos;
