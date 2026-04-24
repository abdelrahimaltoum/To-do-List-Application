const Filter = ({ filter, setFilter }) => {
  return (
    // Dropdown menu to select filter type
    <select
      // Current selected value (all / completed / pending)
      value={filter}

      // Update filter state when user selects a new option
      onChange={(e) => setFilter(e.target.value)}

      className="w-full p-2 border border-gray-300 rounded-md 
      focus:outline-none focus:ring-2 focus:ring-blue-400">
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="pending">Pending</option>
    </select>
  );
};

export default Filter;