import React, { useContext, useState } from "react";
import { AppContext } from "../App.context";
import { ACTION_TYPES } from "../actions/app.actions";

const AddTodo = () => {
  const [value, setValue] = useState("");
  const { dispatch } = useContext(AppContext);
  return (
    <div className="add-todo">
      <div>
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder="Enter a task..."
        />
      </div>
      <div>
        <button
          onClick={() =>
            dispatch({ type: ACTION_TYPES.ADD_TODO, payload: value })
          }
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
