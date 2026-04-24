import { useState } from "react";
import { useTodoView } from "./hooks/useTodoView";
import { useTodoContext } from "./context/TodoContext";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";
import Search from "./components/Search";

const App = () => {
  // Get global state from Context (todos + loading + error)
  const { todos, loading, error } = useTodoContext();

  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  // Derived state: apply filtering + search
  const filteredTodos = useTodoView(todos, filter, search);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="max-w-2xl mx-auto mt-6 px-4">
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="w-full sm:w-1/2">
            <Search search={search} setSearch={setSearch} />
          </div>
          <div className="w-full sm:w-1/2">
            <Filter filter={filter} setFilter={setFilter} />
          </div>

        </div>
        <TodoList
          todos={filteredTodos}
          loading={loading}
          error={error}
        />

      </div>
    </div>
  );
};

export default App;