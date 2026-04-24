import TodoItem from "./TodoItem";

const TodoList = ({ todos, loading, error, toggleTodo }) => {
  if (loading) return <p className="text-center">Loading...</p>;

  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="space-y-3">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;