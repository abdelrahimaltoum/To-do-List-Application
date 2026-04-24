import { useState } from "react";
import { useTodos } from "./hooks/useTodos";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";

const App = () => {
 const { todos, loading, error, toggleTodo, getFilteredTodos } = useTodos();
 const [filter, setFilter] = useState("all");
  const filteredTodos = getFilteredTodos(filter);
  
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="max-w-2xl mx-auto mt-6 px-4">
        <div className="flex justify-center gap-3 mt-4">
        <Filter filter={filter} setFilter={setFilter} />
</div>
        <TodoList
          todos={filteredTodos}
          loading={loading}
          error={error}
          toggleTodo={toggleTodo}
        />
      </div>
    </div>
  );
};

export default App;