import TodoItem from "./TodoItem";
import { useTodoContext } from "../context/TodoContext";

const TodoList = ({ todos, loading, error }) => {
  // Get toggle function from Context (avoids prop drilling)
  const { toggleTodo } = useTodoContext();
  if (loading)
    return (
      <p className="text-center text-gray-500 animate-pulse mt-6">
        Loading todos...
      </p>
    );
  if (error)
    return (
      <p className="text-center text-red-500 mt-6">
        {error}
      </p>
    );
  if (todos.length === 0)
    return (
      <p className="text-center text-gray-500 mt-6">
        No todos found
      </p>
    );

  return (
    <div className="space-y-3 mt-6">
       
      {todos.map((todo) => ( //// Loop through the todos array
        <TodoItem  // For each todo, render a TodoItem component
          key={todo.id} // unique key for React
            todo={todo} // pass todo data
          toggleTodo={toggleTodo} //boolean value "true if to do clicked"
         
        />
      ))}

    </div>
  );
};

export default TodoList;