import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TodoProvider } from "./context/TodoContext";
import { useTodos } from "./hooks/useTodos";
import "./index.css";

const Root = () => {
  const todoData = useTodos();

  console.log("todoData from hook:", todoData);

  
  return (
    <TodoProvider value={todoData}>
      <App />
    </TodoProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);