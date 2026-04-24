const TodoItem = ({ todo, toggleTodo }) => {
  return (
    <div className="bg-white p-3 rounded shadow flex items-center gap-3">

      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />

      <p className={todo.completed ? "line-through text-gray-400" : ""}>
        {todo.title}
      </p>

    </div>
  );
};

export default TodoItem;