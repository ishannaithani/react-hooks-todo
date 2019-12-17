import React, { useReducer } from "react";
import { reducer, initialState } from './reducers/app.reducer';
import TodoApp from "./components/app.todos";
import { AppContext } from './App.context';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { todos, counter } = state;
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <TodoApp todos={todos} counter={counter} />
      </div>
    </AppContext.Provider>
  );
}

export default App;
