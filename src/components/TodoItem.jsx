const TodoItem = ({ todo, toggleTodo }) => {
  return (
    // Container for a single todo item (styled as a card)
    <div className="bg-white p-4 rounded-md shadow-sm flex items-center gap-3">
      <input
        type="checkbox"
        checked={todo.completed}
        // When clicked, call toggle function with this todo's id
        onChange={() => toggleTodo(todo.id)}
      />
      <p
        // If completed show line-through + faded color
        // If not normal text
        className={todo.completed ? "line-through text-gray-400" : ""}
      >
        {todo.title}
      </p>

    </div>
  );
};

export default TodoItem;