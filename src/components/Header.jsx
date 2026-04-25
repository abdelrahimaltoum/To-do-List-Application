const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className="bg-gray-900 dark:bg-gray-800 text-white py-4 sm:py-5 shadow-md">
      
      <div className="max-w-2xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">

        <div className="text-center sm:text-left">
          <h1 className="text-xl sm:text-3xl font-bold">
            Todo App 📝
          </h1>

          <p className="text-gray-400 mt-1 text-xs sm:text-sm">
            Stay organized and get things done
          </p>
        </div>

        {/* Dark mode button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="
            px-3 py-1
            text-xs sm:text-sm
            bg-gray-700 hover:bg-gray-600
            rounded-md
            transition
            w-full sm:w-auto
          "
        >
          {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
        </button>

      </div>
    </header>
  );
};

export default Header;