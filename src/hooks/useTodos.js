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
        const data = await fetchTodos(); // Call API function to get data 
        setTodos(data);// Save fetched todos into state
      } catch (err) { 
        setError("Something went wrong");// If an error occurs, store error message
      } finally {
         setLoading(false);  // Stop loading whether success or error
      }
    }; 
    loadTodos(); // Execute the fetch function
  }, []);

  // Function to toggle completed state of a todo
 // Toggle the completed state of a specific todo
const toggleTodo = (id) => {
  setTodos((prevTodos) =>
    // Go through all previous todos
    prevTodos.map((todo) =>
      // If this is the clicked todo → toggle its completed value
      todo.id === id
        ? { ...todo, completed: !todo.completed }
        // Otherwise → return todo unchanged
        : todo
    )
  );
};

// Filter todos based on selected filter (all / completed / pending)
const getFilteredTodos = (todos, filter) => {
  return todos.filter((todo) => {
    // Show only completed todos
    if (filter === "completed") return todo.completed;

    // Show only pending (not completed) todos
    if (filter === "pending") return !todo.completed;

    // Default → show all todos
    return true;
  });
};
return {todos,loading,error,toggleTodo , getFilteredTodos,};
};