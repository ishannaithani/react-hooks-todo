import React, { useContext } from "react";
import Todo from './app.todo';
import AddTodo from './app.todo.add';
import { AppContext } from '../App.context';
import "./app.todo.css";

const TodoApp = () => {
  const { state } = useContext(AppContext);
  const { todos } = state;
  return (
    <div className="todo-container effect2">
      <div>
        <h2>List</h2>
        <ul className="todo-list">
          {todos.map(todo => {
            const { id, text } = todo;
            return <Todo key={id} id={id} text={text} />;
          })}
        </ul>
        <AddTodo />
      </div>     
    </div>
  );
};

export default TodoApp;
