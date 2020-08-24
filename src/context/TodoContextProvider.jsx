import React, { createContext, useReducer } from "react";
import { todoReducer } from "./todo.reducer";

const initialState = { todos: {} };
export const TodoContext = createContext(initialState);

export const TodoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
