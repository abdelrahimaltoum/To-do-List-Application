import { useMemo } from "react";

/**
 *  Custom hook for derived UI state
 * Handles filtering + search logic for todos
 *
 * This keeps App.jsx clean by moving all "view logic" here
 */
export const useTodoView = (todos, filter, search) => {

  /**
   *  Memoized derived list
   * Recalculates only when todos, filter, or search changes
   */
  const filteredTodos = useMemo(() => {

    return todos

      //  Step 1: Apply status filter (all / completed / pending)
      .filter((todo) => {
        if (filter === "completed") return todo.completed;
        if (filter === "pending") return !todo.completed;
        return true;
      })

      //  Step 2: Apply search filter (case-insensitive)
      .filter((todo) =>
        todo.title.toLowerCase().includes(search.toLowerCase())
      );

  }, [todos, filter, search]);

  //  Return computed list
  return filteredTodos;
};