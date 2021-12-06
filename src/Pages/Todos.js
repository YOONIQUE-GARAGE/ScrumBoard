import React, { useState } from "react";
import Todo from "../Components/Todo";
import "./Todos.css";
import TodoForm from "../Components/TodoForm";
import IngTodo from "../Components/IngTodo";
import UrgerTodo from "../Components/UrgentTodo";
import TestTodo from "../Components/TestTodo";
import UrgentTodos from '../Components/UrgentTodo';
const Todos = () => {
  // todo배열 
  const [todos, setTodos] = useState([]);
  // ing배열 
  const [ings, setIngs] = useState([]);
  // urgent배열 
  const [urgents, setUrgents] = useState([]);
  // test배열 
  const [tests, setTests] = useState([]);
  // todo추가
  const addTodos = (todoVal) => {
    const todo = {};
    todo.id = todos.length + 1;
    todo.text = todoVal;
    const newTodo = [todo, ...todos];
    setTodos(newTodo);
  };
  // todo -> ing 이동
  const moveNext = (id, branch) => {
    if(branch === 'todo'){
      setIngs(ings.concat(todos.filter((todo) => id === todo.id)));
      delThings(id,'todo');
    }else if(branch === 'ing'){
      setTests(tests.concat(ings.filter((ing) => id === ing.id)));
      delThings(id, 'ing');
    }
  }
  // ing -> test 이동
  // 어느구역이든 -> Urgent 이동
  const moveUrgent = (id, branch) => {
    switch(branch){
      case 'todo': setUrgents(urgents.concat(todos.filter((todo) => id === todo.id))); break;
      case 'ing': setUrgents(urgents.concat(ings.filter((ing) => id === ing.id))); break;
      default: setUrgents(urgents);
    }
    delThings(id, branch);
  }
  // 어느구역 todo든 삭제
  const delThings = (id, branch) => {
    if(branch === 'todo'){
      setTodos(todos.filter((todo) => id !== todo.id));
    }else if(branch === 'ing'){
      setIngs(ings.filter((ing) => id !== ing.id));
    }
  }

  
  return (
    <React.Fragment>
      <div className="newTodoForm_container">
        <TodoForm addtodo={addTodos} />
      </div>
      <div className="box_container">
        <div className="todoForm_container w-23">
          <div>여긴 투두칸</div>
          <ul className="todos">
            {/* todo와 버튼들을 map으로 하나씩 구성하기 */}
            {todos.map((todo) => <Todo todo={todo} delFunc={delThings} ingFunc={moveNext} urgentFunc={moveUrgent} key={todo.id}/>)}
          </ul>
        </div>
        <div className="urgentForm_container w-23">
          <div>여긴 긴급처리 칸</div> 
          <ul className="urgents">
          {urgents.map((urgent) => <UrgentTodos urgent={urgent}/>)}
          </ul>
        </div>
        <div className="ingForm_container w-23">
          <div>여긴 진행중 칸</div>
          <ul className="ings">
            {ings.map((ing) => <IngTodo ing={ing} delFunc={delThings} testFunc={moveNext} urgentFunc={moveUrgent} key={ing.id}/>)}
          </ul>
        </div>
        <div className="test_container w-23">
          <div>여긴 테스트칸</div>
          <ul className='tests'>
            {tests.map((test) => <TestTodo test={test} />)}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Todos;
