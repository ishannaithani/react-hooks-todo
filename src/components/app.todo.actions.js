import React, { useContext } from 'react';
import { AppContext } from '../App.context';

const editTodo = (dispatch, id) => {
  
}

const removeTodo = (dispatch, id) => {

};

const TodoActions = ({ id }) => {
  const { dispatch } = useContext(AppContext);
  return (
    <>
      <a href="#edit" onClick={editTodo.bind(this, dispatch, id)}>
        Edit
      </a>
      <a href="#remove" onClick={removeTodo.bind(this, dispatch, id)}>
        Remove
      </a>
    </>
  );
};

export default TodoActions;