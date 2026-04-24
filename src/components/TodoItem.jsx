import { useTodoContext } from "../context/TodoContext";

const TodoItem = ({ todo }) => {
  // Get toggle function from Context (no prop drilling anymore)
  const { toggleTodo } = useTodoContext();

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