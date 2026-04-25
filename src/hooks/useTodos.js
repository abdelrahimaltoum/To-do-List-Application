import { useState, useEffect, useMemo } from "react";
import { fetchTodos } from "../services/api";

/**
 * Custom hook to manage all todo-related logic
 *
 * This hook centralizes:
 * - Data fetching
 * - Loading state
 * - Error handling
 * - Todo updates (toggle)
 * - Filtering helper logic
 *
 * This keeps components clean and focused only on UI.
 */
export const useTodos = () => {

  // Stores the list of todos fetched from API
  const [todos, setTodos] = useState([]);

  // Tracks loading state while fetching data
  const [loading, setLoading] = useState(true);

  // Stores error message if API request fails
  const [error, setError] = useState(null);

  /**
   * Fetch todos when component mounts
   * Runs only once because dependency array is empty
   */
  useEffect(() => {
    const loadTodos = async () => {
      try {
        // API call to fetch todos
        const data = await fetchTodos();

        // Store fetched todos in state
        setTodos(data);
      } catch (err) {
        // Handle any API or network error
        setError("Something went wrong");
      } finally {
        // Stop loading state whether success or failure
        setLoading(false);
      }
    };

    loadTodos();
  }, []);

  /**
   * Toggle todo completion status
   *
   * Finds the clicked todo by id and flips its "completed" value
   * This ensures immutability (important React pattern)
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
   * Memoized filtering function
   *
   * Purpose:
   * - Avoid recalculating filter logic on every render
   * - Only recompute when dependencies change
   *
   * Filters:
   * - completed → only completed todos
   * - pending → only incomplete todos
   * - all → return everything
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

  /**
   * Expose state + functions to components
   */
  return {
    todos,
    loading,
    error,
    toggleTodo,
    getFilteredTodos
  };
};