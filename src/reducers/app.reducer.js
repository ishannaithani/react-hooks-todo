import { ACTION_TYPES } from "../actions/app.actions";

export const initialState = {
  counter: 2,
  todos: [
    {
      id: 1,
      text: "One"
    },
    {
      id: 2,
      text: "Two"
    }
  ]
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_TODO: {
      const newCounter = state.counter + 1;
      const newTodo = {
        id: newCounter,
        text: action.text
      };
      return {
        counter: newCounter,
        todos: [...state.todos, newTodo]
      };
    }
    default: return initialState;
  }
};
