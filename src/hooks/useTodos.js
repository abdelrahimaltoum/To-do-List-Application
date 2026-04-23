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
        // Call API service to get data
        const data = await fetchTodos();

        // Save data into state
        setTodos(data);
      } catch (err) {
        // Handle any error during fetch
        setError("Something went wrong while fetching todos");
      } finally {
        // Stop loading regardless of success or failure
        setLoading(false);
      }
    };

    loadTodos();
  }, []);

  // Return values so components can use them
  return { todos, loading, error };
};