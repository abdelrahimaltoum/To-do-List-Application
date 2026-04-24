import { useState, useEffect, useMemo } from "react";
import { fetchTodos } from "../services/api";

export const useTodos = () => {

  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch todos from API
    const loadTodos = async () => {
      try {
        const data = await fetchTodos(); // Call API function to get data 
        setTodos(data); // Save fetched todos into state
      } catch (err) { 
        setError("Something went wrong"); // Store error message if request fails
      } finally {
        setLoading(false); // Stop loading in all cases
      }
    }; 

    loadTodos(); // Run fetch on component mount
  }, []);

  // Toggle the completed state of a specific todo
  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed } // Flip completed state
          : todo // Keep other todos unchanged
      )
    );
  };

  // Memoized filtering function (performance optimization)
  const getFilteredTodos = useMemo(() => {
    return (todos, filter) => {
      return todos.filter((todo) => {
        if (filter === "completed") return todo.completed;
        if (filter === "pending") return !todo.completed;
        return true; // Default → return all todos
      });
    };
  }, []);

  return {
    todos,
    loading,
    error,
    toggleTodo,
    getFilteredTodos
  };
};