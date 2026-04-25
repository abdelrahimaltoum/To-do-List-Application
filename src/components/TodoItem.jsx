const TodoItem = ({ todo, toggleTodo, loading }) => {
  return (
    <div
      className="
        bg-white dark:bg-gray-800
        p-3 sm:p-4 rounded-md shadow-sm
        flex items-center gap-3
        hover:shadow-lg hover:scale-[1.02]
        active:scale-[0.98]
        transition-all duration-200
      "
    >
      {/* Bigger clickable checkbox */}
      <input
        type="checkbox"
        checked={Boolean(todo.completed)}
        onChange={() => toggleTodo(todo.id)}
        disabled={loading}
        className="
          w-6 h-6 flex-shrink-0   /* 👈 bigger size */
          cursor-pointer accent-blue-500
          disabled:opacity-40 disabled:cursor-not-allowed
          transition-all duration-150
        "
      />

      {/* Todo text */}
      <p
        className={`text-sm sm:text-base flex-1 ${
          todo.completed
            ? "line-through text-gray-400"
            : "text-gray-800 dark:text-gray-200"
        }`}
      >
        {todo.title}
      </p>
    </div>
  );
};

export default TodoItem;