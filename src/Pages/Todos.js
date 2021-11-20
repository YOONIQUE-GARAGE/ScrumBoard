import React, { useState } from 'react';
import { Component } from 'react';
import Todo from '../Components/Todo';
import './Todos.css';

const Todos = () => {
  // 새로운 todo를 작성할 수 있도록 useState이용해보기
  const [todoVal, setTodoVal] = useState('');
  // useState 상태 변경 함수들
  const handleChangeTodo = (event) => {
    setTodoVal(event.target.value);
  }

  return (
    <React.Fragment>
      <div className="todoForm_container">
        <div className="todoFrom_wrapper">
          <div className='todoForm_inputContainer'>
            <div className='todoForm_innerWrapper'>
              <input type="text" className='todoForm_input_todo' placeholder="What to do?" onChange={handleChangeTodo}></input>
            </div>
            <div className='todoForm_submit'>
              <button className='todoForm_submitButton'>button</button>
            </div>
          </div>
        </div>
      </div>
      <div className="box_container">
      <div className="todoListForm_container w-23">
      <div>여긴 투두칸</div>
      <ul className="Todos">
        {/* todo와 버튼들을 map으로 하나씩 구성하기 */}
        <Todo todo = {todoVal}/>
      </ul>
      </div>
      <div className="emergencyForm_container w-23">
        <div>여긴 긴급처리 칸</div>
      </div>
      <div className="inprogressive_container w-23">
        <div>여긴 진행중 칸</div>
      </div>
      <div className="test_container w-23">
        <div>여긴 테스트칸</div>
      </div>
      </div>
    </React.Fragment>
  );
}

export default Todos;
