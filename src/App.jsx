import { useState } from "react";
import { useTodos } from "./hooks/useTodos";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";
import Search from "./components/Search";

const App = () => {
  const { todos, loading, error, toggleTodo, getFilteredTodos } = useTodos(); // Get data and logic from custom hook
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  // Step 1: filter todos by status
  const statusFilteredTodos = getFilteredTodos(todos, filter);

  // Step 2: filter again by search text (title)
  const filteredTodos = statusFilteredTodos.filter((todo) =>
    todo.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="max-w-2xl mx-auto mt-6 px-4">
        <div className="flex gap-4 mb-6">
          <div className="w-1/2">
            <Search search={search} setSearch={setSearch} />
          </div>

          <div className="w-1/2">
            <Filter filter={filter} setFilter={setFilter} />
          </div>
        </div>
       <TodoList
  todos={filteredTodos} // List of todos after applying filter + search
  loading={loading}// Loading state while fetching data from API
  error={error}// Error message if fetching fails
 toggleTodo={toggleTodo}// Function to toggle completed state of a todo
/>

      </div>
    </div>
  );
};

export default App;