const Search = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      // Current search value (controlled input)
      value={search}
      // Update search state as user types
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search todos..."
      className="w-full p-2 border border-gray-300 rounded-md 
focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  );
};

export default Search;