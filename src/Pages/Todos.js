import React, { useState } from "react";
import { Component } from "react";
import Todo from "../Components/Todo";
import "./Todos.css";
import TodoForm from "../Components/TodoForm";

const Todos = () => {
  // todo배열 만들기
  const [todos, setTodos] = [[]];
  // todo추가함수
  const addTodos = () => {};
  return (
    <React.Fragment>
      <div className="todoForm_container">
        <TodoForm addtodo={addTodos} />
      </div>
      <div className="box_container">
        <div className="todoListForm_container w-23">
          <div>여긴 투두칸</div>
          <ul className="Todos">
            {/* todo와 버튼들을 map으로 하나씩 구성하기 */}
            <Todo todo={todos} />
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
};

export default Todos;
