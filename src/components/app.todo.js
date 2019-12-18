import React, { useState, useContext, useRef, useEffect } from "react";
import Actions from "./app.todo.actions";
import { AppContext } from "../App.context";
import { ACTION_TYPES } from "../actions/app.actions";

const Todo = ({ id, text, isEditing = false }) => {
  const [value, setValue] = useState(text);
  const { dispatch } = useContext(AppContext);
  const inputEl = useRef(null);
  const onKeyDown = e => {
    if (e.keyCode === 13) {
      setValue(value);
      dispatch({
        type: ACTION_TYPES.COMPLETE_EDIT_TODO,
        payload: {
          text: value,
          id
        }
      });
    }
  };

  useEffect((ss) => {
    if (isEditing && value === text) {      
      inputEl.current.select();
    }
  });

  return (
    <li key={id} className="todo-item">
      <div className="d-flex">
        <div>
          {isEditing ? (
            <input
              type="text"
              value={value}
              onChange={e => setValue(e.target.value)}
              onKeyDown={onKeyDown}
              tabIndex="-1"
              ref={inputEl}
            />
          ) : (
            text
          )}
        </div>
        <div className="d-flex">
          <Actions id={id} />
        </div>
      </div>
    </li>
  );
};

export default Todo;
