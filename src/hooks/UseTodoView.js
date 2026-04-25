import { useMemo } from "react";

/**
 * Custom hook for derived UI state
 *
 * Responsibility:
 * - Takes raw todos data
 * - Applies filtering (all / completed / pending)
 * - Applies search functionality
 * - Returns a computed "view-ready" list
 *
 * This keeps App.jsx clean by moving all UI transformation logic here.
 */
export const useTodoView = (todos, filter, search) => {

  /**
   * Memoized derived todo list
   *
   * Why useMemo?
   * - Prevents recalculating filter + search on every render
   * - Only recalculates when dependencies change
   *
   * Dependencies:
   * - todos → new data from API or updates
   * - filter → selected filter option
   * - search → search input value
   */
  const filteredTodos = useMemo(() => {

    return todos

      /**
       * STEP 1: Filter by status
       *
       * Logic:
       * - "completed" → show only completed todos
       * - "pending" → show only incomplete todos
       * - "all" → show everything
       */
      .filter((todo) => {
        if (filter === "completed") return todo.completed;
        if (filter === "pending") return !todo.completed;
        return true;
      })

      /**
       * STEP 2: Filter by search text
       *
       * Logic:
       * - Converts both strings to lowercase for case-insensitive matching
       * - Checks if todo title includes search text
       */
      .filter((todo) =>
        todo.title.toLowerCase().includes(search.toLowerCase())
      );

  }, [todos, filter, search]);

  /**
   * Return final computed list
   */
  return filteredTodos;
};