import TodoItem from "./TodoItem";
import { useTodoContext } from "../context/TodoContext";

const TodoList = ({ todos, loading, error }) => {
  // GLOBAL FUNCTION FROM CONTEXT
  // This avoids passing toggleTodo through multiple components (prop drilling)
  const { toggleTodo } = useTodoContext();

  // LOADING STATE UI
  if (loading)
  return (
    <div className="flex items-center justify-center min-h-[50vh] px-4">
      <div className="text-center">
        {/* Loading spinner */}
        <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin mx-auto"></div>

        {/* Loading text */}
        <p className="text-gray-500 mt-4 text-sm sm:text-base animate-pulse">
          Loading todos...
        </p>
      </div>
    </div>
  );

  // ERROR STATE UI
  if (error)
    return (
      <p className="text-center text-red-500 mt-6">
        {error}
      </p>
    );

  // EMPTY STATE UI (NO DATA)
  if (todos.length === 0)
    return (
      <p className="text-center text-gray-500 mt-6">
        No todos found
      </p>
    );

  return (

    // TODO LIST CONTAINER

    <div className="space-y-3 mt-6">
      {todos.map((todo) => ( // Loop through the todos array
        <TodoItem
          key={todo.id} // React optimization (unique identity per item)
          todo={todo} // single todo object passed down
          toggleTodo={toggleTodo} // function to toggle completion state
        />
      ))}
    </div>
  );
};

export default TodoList;