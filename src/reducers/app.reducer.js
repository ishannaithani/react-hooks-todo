import { ACTION_TYPES } from "../actions/app.actions";

export const initialState = {
  counter: 2,
  todos: [
    {
      id: 1,
      text: "Buy milk",
      isEditing: false
    },
    {
      id: 2,
      text: "Pay bills",
      isEditing: false
    }
  ]
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_TODO: {
      const newCounter = state.counter + 1;
      const newTodo = {
        id: newCounter,
        text: action.payload
      };
      return {
        counter: newCounter,
        todos: [...state.todos, newTodo]
      };
    }

    case ACTION_TYPES.START_EDIT_TODO: {
      const { id } = action.payload;
      let { todos } = state;
      const todoIndex = todos.findIndex((todo) => id === todo.id);
      todos = todos.map((todo) => { todo.isEditing = false; return todo });
      todos[todoIndex].isEditing = true;
      return {
        counter: state.counter,
        todos
      };
    }

    case ACTION_TYPES.COMPLETE_EDIT_TODO: {
      const { text, id } = action.payload;
      const { todos } = state;
      const todoIndex = todos.findIndex((todo) => id === todo.id);
      todos[todoIndex].isEditing = false;
      todos[todoIndex].text = text;
      return {
        counter: state.counter,
        todos
      };
    }

    case ACTION_TYPES.REMOVE_TODO: {
      const { id } = action.payload;
      const { todos } = state;
      const todoIndex = todos.findIndex((todo) => id === todo.id);
      const newTodos = todos.filter(function(value, index, arr){
        return index !== todoIndex;    
      });
      return {
        counter: state.counter,
        todos: newTodos
      };
    }

    default: return initialState;
  }
};
