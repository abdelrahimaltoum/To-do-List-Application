const Filter = ({ filter, setFilter }) => {
  return (
    //  Filter dropdown container
    <select
      //  Current selected filter value (controlled component)
      value={filter}
      
      //  Update filter state when user changes selection
      onChange={(e) => setFilter(e.target.value)}
      className="w-full p-2 text-sm sm:text-base border border-gray-300 rounded-md
focus:outline-none focus:ring-2 focus:ring-blue-400
transition-all duration-200"
    >
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="pending">Pending</option>
    </select>
  );
};

export default Filter;