const Search = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      //  Current search value from parent state
      value={search}
      //  Update search state on every keystroke (live filtering)
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search todos..."
      className="w-full p-2 text-sm sm:text-base border border-gray-300 rounded-md
focus:outline-none focus:ring-2 focus:ring-blue-400
transition-all duration-200"
    />
  );
};

export default Search;