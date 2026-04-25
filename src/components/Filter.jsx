const Filter = ({ filter, setFilter }) => {
  return (
    <select
      // Controlled component:
      // value comes from parent state (App.jsx)
      value={filter}

      // Update filter state when user selects a new option
      onChange={(e) => setFilter(e.target.value)}

      className="
        w-full
        p-2
        text-sm sm:text-base

        border border-gray-300 dark:border-gray-600

        bg-white dark:bg-gray-800
        text-gray-800 dark:text-gray-200

        rounded-md

        focus:outline-none
        focus:ring-2 focus:ring-blue-400

        transition-all duration-200
      "
    >
      {/* Filter options */}
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="pending">Pending</option>

    </select>
  );
};

export default Filter;