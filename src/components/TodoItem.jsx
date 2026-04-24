const TodoItem = ({ todo, toggleTodo, loading }) => {
  return (
     <div
      className="bg-white p-3 sm:p-4 rounded-md shadow-sm flex items-center gap-3
      hover:shadow-lg hover:scale-[1.01]
      active:scale-[0.98]
      transition-all duration-200"
    >

      
      <input
        type="checkbox"
        checked={Boolean(todo.completed)}
        onChange={() => toggleTodo(todo.id)}
        disabled={loading} //Checkbox disabled during loading
        className="w-5 h-5 cursor-pointer accent-blue-500
        disabled:opacity-40 disabled:cursor-not-allowed
        transition-all duration-150"
      />

      <p
        className={`text-sm sm:text-base flex-1 transition-all duration-200 ${
          todo.completed
            ? "line-through text-gray-400"
            : "text-gray-800"
        }`}
      >
        {todo.title}
      </p>

    </div>
  );
};

export default TodoItem;