import { useState, useEffect, useMemo } from "react";
import { fetchTodos } from "../services/api";

/**
 *  Custom hook to manage all todo-related logic
 * Handles:
 * - fetching data
 * - loading state
 * - error state
 * - toggling todos
 * - filtering helper function
 */
export const useTodos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /**
   *  Fetch todos from API on component mount
   */
  useEffect(() => {
    const loadTodos = async () => {
      try {
        const data = await fetchTodos(); // API call
        setTodos(data); // store data in state
      } catch (err) {
        setError("Something went wrong"); // handle error
      } finally {
        setLoading(false); // stop loading in all cases
      }
    };

    loadTodos();
  }, []);

  /**
   *  Toggle todo completion state
   * Updates only the clicked todo
   */
  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  /**
   *  Memoized filtering function (performance optimization)
   * Prevents recalculation unless dependencies change
   */
  const getFilteredTodos = useMemo(() => {
    return (todos, filter) => {
      return todos.filter((todo) => {
        if (filter === "completed") return todo.completed;
        if (filter === "pending") return !todo.completed;
        return true;
      });
    };
  }, []);

  //  Return all state + functions to the app
  return {
    todos,
    loading,
    error,
    toggleTodo,
    getFilteredTodos
  };
};