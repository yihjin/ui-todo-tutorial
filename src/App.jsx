import React from "react";
import "./App.css";
import { TodoContextProvider } from "./context/TodoContextProvider";
import { Header } from "./components/Header";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

const App = () => {
  return (
    <div className="app">
      <Header />
      <TodoContextProvider>
        <TodoInput />
        <TodoList />
      </TodoContextProvider>
    </div>
  );
};

export default App;
