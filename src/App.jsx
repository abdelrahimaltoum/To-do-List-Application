import { useTodos } from "./hooks/useTodos";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

const App = () => {
  const { todos, loading, error, toggleTodo } = useTodos();

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="max-w-2xl mx-auto mt-6 px-4">
        <TodoList
          todos={todos}
          loading={loading}
          error={error}
          toggleTodo={toggleTodo}
        />
      </div>
    </div>
  );
};

export default App;