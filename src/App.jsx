import { useState, useMemo } from "react";
import { useTodos } from "./hooks/useTodos";
import { TodoProvider } from "./context/TodoContext";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";
import Search from "./components/Search";

const App = () => {
  const { todos, loading, error, toggleTodo, getFilteredTodos } = useTodos();

  // Filter state (all / completed / pending)
  const [filter, setFilter] = useState("all");

  // Search state
  const [search, setSearch] = useState("");

  // ✅ Memoized filtering + search (performance optimization)
  const filteredTodos = useMemo(() => {
    // Step 1: filter by status
    const statusFiltered = getFilteredTodos(todos, filter);

    // Step 2: filter by search
    return statusFiltered.filter((todo) =>
      todo.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [todos, filter, search, getFilteredTodos]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="max-w-2xl mx-auto mt-6 px-4">

        {/* Search + Filter */}
        <div className="flex gap-4 mb-6">
          <div className="w-1/2">
            <Search search={search} setSearch={setSearch} />
          </div>

          <div className="w-1/2">
            <Filter filter={filter} setFilter={setFilter} />
          </div>
        </div>

        {/* Todo List */}
       <TodoProvider value={{ toggleTodo }}>
  <TodoList
    todos={filteredTodos}
    loading={loading}
    error={error}
  />
</TodoProvider>

      </div>
    </div>
  );
};

export default App;