import TodoItem from "./TodoItem";

const TodoList = ({ todos, loading, error }) => {
  if (loading) return <p className="text-center">Loading...</p>;

  if (error) return <p className="text-center text-red-500">{error}</p>;
if (todos.length === 0)
  return (
    <p className="text-center text-gray-500">
      No todos found
    </p>
  );
  return (
    <div className="space-y-3 mt-4">
      {
        // Loop through the todos array
        todos.map((todo) => (
          
          // For each todo, render a TodoItem component
          <TodoItem
            key={todo.id} // unique key for React
            todo={todo} // pass todo data
          />
          
        ))
      }
    </div>
  );
};

export default TodoList;