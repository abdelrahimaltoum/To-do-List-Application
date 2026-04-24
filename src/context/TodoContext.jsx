import { createContext, useContext } from "react";

//  Create Context for global todo state
// This allows us to avoid prop drilling across components
const TodoContext = createContext(null);

/**
 *  Provider component
 * Wraps the application and provides global state (todos, loading, etc.)
 */
export const TodoProvider = ({ children, value }) => {
  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
};

/**
 *  Custom hook to consume TodoContext easily
 * This replaces useContext(TodoContext) everywhere
 */
export const useTodoContext = () => {
  const context = useContext(TodoContext);

  //  Safety check to prevent usage outside Provider
  if (!context) {
    throw new Error("useTodoContext must be used inside TodoProvider");
  }

  return context;
};