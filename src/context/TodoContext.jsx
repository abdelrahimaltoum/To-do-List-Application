import { createContext, useContext } from "react";

// Create a Context object to share todo-related data across components
const TodoContext = createContext();

// Provider component that wraps the app and provides shared values
export const TodoProvider = ({ children, value }) => {
  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
};

// Custom hook to easily access TodoContext values in any component
export const useTodoContext = () => useContext(TodoContext);