import { useState } from "react";
import { useTodoView } from "./hooks/useTodoView"; // Handles filtering + searching logic (derived UI state)
import { useTodoContext } from "./context/TodoContext"; // Global state (todos, loading, error from Context API)
import { usePagination } from "./hooks/usePagination"; // Handles pagination slicing logic

import Header from "./components/Header"; 
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";
import Search from "./components/Search"; 

const App = () => {
  // GLOBAL STATE (from Context API)
  const { todos, loading, error } = useTodoContext();

  // LOCAL UI STATE

  const [filter, setFilter] = useState("all"); // Controls filtering mode (all/completed/pending)
  const [search, setSearch] = useState(""); // Stores search input value
  const [darkMode, setDarkMode] = useState(false); // Toggles dark mode UI theme
  const [currentPage, setCurrentPage] = useState(1); // Tracks current pagination page

  const itemsPerPage = 10; // Number of todos per page (pagination config)
  // STEP 1: FILTER + SEARCH (DERIVED STATE)==========
  // This ensures we only paginate already-filtered results
  const filteredTodos = useTodoView(todos, filter, search);
  // STEP 2: PAGINATION (SLICE DATA PER PAGE)==========
  const {
    currentData: paginatedTodos, // Todos shown on current page only
    totalItems, // Total items AFTER filtering (used for page calculation)
  } = usePagination(filteredTodos, currentPage, itemsPerPage);
  // STEP 3: CALCULATE TOTAL PAGES==========
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div
      className={`${
        darkMode ? "dark" : ""
      } min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300`}
    >
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <div
        className=" max-w-2xl mx-auto mt-4 sm:mt-6 px-3 sm:px-4">
        <div
          className="
            flex flex-col
            gap-3 sm:gap-4
            mb-5 sm:mb-6
          "
        >
          <div className="w-full">
            <Search search={search} setSearch={setSearch} />
          </div>
          <div className="w-full">
            <Filter filter={filter} setFilter={setFilter} />
          </div>

        </div>
        <TodoList
          todos={paginatedTodos}
          loading={loading}
          error={error}
        />

        {/* PAGINATION */}
        <div
          className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mt-6"
        >
          {/* PREVIOUS BUTTON */}
          <button
            onClick={() =>
              setCurrentPage((p) => Math.max(p - 1, 1))
            }
            disabled={currentPage === 1}
            className="
              w-full sm:w-auto
              px-4 py-2
              bg-gray-200 dark:bg-gray-700 
              rounded-md text-sm sm:text-base disabled:opacity-40 transition active:scale-95
            "
          >
            Prev
          </button>

          {/* PAGE INDICATOR */}
          <span className="text-sm text-gray-600 dark:text-gray-300 text-center">
            Page {currentPage} of {totalPages || 1}
          </span>

          {/* NEXT BUTTON */}
          <button
            onClick={() =>
              setCurrentPage((p) =>
                currentPage < totalPages ? p + 1 : p
              )
            }
            disabled={currentPage >= totalPages}
            className="
              w-full sm:w-auto
              px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md
              text-sm sm:text-base disabled:opacity-40 transition active:scale-95
            "
          >
            Next
          </button>

        </div>

      </div>
    </div>
  );
};

export default App;