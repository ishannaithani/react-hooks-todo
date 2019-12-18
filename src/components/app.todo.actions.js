import React, { useContext } from 'react';
import { AppContext } from '../App.context';
import { ACTION_TYPES } from '../actions/app.actions';

const editTodo = (dispatch, id) => {
  dispatch({ type: ACTION_TYPES.START_EDIT_TODO, payload: { id } });
}

const removeTodo = (dispatch, id) => {
  dispatch({ type: ACTION_TYPES.REMOVE_TODO, payload: { id } });
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