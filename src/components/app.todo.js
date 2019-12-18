import React, { useState, useContext } from 'react';
import Actions from './app.todo.actions';
import { AppContext } from '../App.context';
import { ACTION_TYPES } from '../actions/app.actions';

const Todo = ({ id, text, isEditing = false }) => {
  const [value, setValue] = useState(text);
  const { dispatch } = useContext(AppContext);
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      setValue(value);
      dispatch({ 
        type: ACTION_TYPES.EDIT_TODO, 
        payload: {
          isEditing: false,
          text: value,
          id
        }
      });
    }
  }

  return (
    <li key={id}>
      <div className="d-flex">
        <div>
          {
            isEditing ? <input type="text" value={value} onChange={(e) => setValue(e.target.value)} onKeyDown={onKeyDown} /> : text
          }
        </div>
        <div className="d-flex">
          <Actions id={id} />
        </div>
      </div>
    </li>
  );
};

export default Todo;