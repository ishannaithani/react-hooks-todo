import { ACTION_TYPES } from "../actions/app.actions";

export const initialState = {
  counter: 2,
  todos: [
    {
      id: 1,
      text: "One",
      isEditing: false
    },
    {
      id: 2,
      text: "Two",
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

    case ACTION_TYPES.EDIT_TODO: {
      const { isEditing, text, id } = action.payload;
      const { todos } = state;
      const todoIndex = todos.findIndex((todo) => id === todo.id);
      
      todos[todoIndex].isEditing = isEditing;
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
