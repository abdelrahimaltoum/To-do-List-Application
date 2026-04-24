import { useState, useEffect } from "react";
import { fetchTodos } from "../services/api";

export const useTodos = () => {

  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch todos from API
    const loadTodos = async () => {
      try {
        // Call API function to get data
        const data = await fetchTodos();

        // Save fetched todos into state
        setTodos(data);
      } catch (err) {
        // If an error occurs, store error message
        setError("Something went wrong");
      } finally {
        // Stop loading whether success or error
        setLoading(false);
      }
    };

    // Execute the fetch function
    loadTodos();
  }, []);

  // Function to toggle completed state of a todo
  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      // Loop through previous todos
      prevTodos.map((todo) =>
        // If this is the clicked todo, flip its completed value
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo // otherwise keep it unchanged
      )
    );
  };

  // Return data and functions to be used in components
 

  const getFilteredTodos = (filter) => {
  return todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true;
  });
}; 
return {todos,loading,error,toggleTodo , getFilteredTodos,};
};