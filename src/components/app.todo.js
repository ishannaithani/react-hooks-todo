import React from 'react';
import Actions from './app.todo.actions'

const Todo = ({ id, text }) => {
  return (
    <li key={id}>
      <div className="d-flex">
        <div>{text}</div>
        <div className="d-flex">
          <Actions id={id} />
        </div>
      </div>
    </li>
  );
};

export default Todo;