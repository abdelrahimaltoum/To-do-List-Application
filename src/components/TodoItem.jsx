const TodoItem = ({ todo }) => {
  return (
    <div className="bg-white p-3 rounded-lg shadow-sm border">
      <p className="text-gray-800">{todo.title}</p>
    </div>
  );
};

export default TodoItem;