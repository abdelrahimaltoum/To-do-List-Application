const Search = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      // Current search value coming from parent (App state)
      value={search}

      // Updates state on every keystroke (live filtering behavior)
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search todos..."
      className="
        w-full p-2
        text-sm sm:text-base border border-gray-300 dark:border-gray-600

        bg-white dark:bg-gray-800
        text-gray-800 dark:text-gray-200 rounded-md

        focus:outline-none
        focus:ring-2 focus:ring-blue-400

        transition-all duration-200
      "
    />
  );
};

export default Search;