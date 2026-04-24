
# Todo App

This is a simple Todo application built with React.
It fetches todos from an external API and allows the user to mark tasks as completed using a checkbox.

It also includes:

* filtering (all / completed / pending)
* search (filter todos by title in real time)
* performance optimization using memoization
* state sharing using Context API (to avoid prop drilling)

---

## How the app works

When the app starts, it loads data from an external API.
The data is a list of todos, and each todo has:

* id
* title
* completed status

The app then displays these todos on the screen.

Each todo has a checkbox.
When the checkbox is clicked:

* the todo's completed state is updated
* the UI updates immediately (line-through text for completed tasks)

The user can filter the list using a dropdown:

* All → shows everything
* Completed → shows only completed todos
* Pending → shows only incomplete todos

The user can also search:

* typing in the search bar filters todos by title
* results update instantly while typing
* search works together with the selected filter

If no todos match the search, a message is shown.

---

## Data Flow

The data flows in one direction:

API → useTodos → App.jsx → TodoList → TodoItem → UI

Filtering and searching both happen in `App.jsx` using data from the hook, then passed down to the UI.

---

## Components

### App.jsx

This is the main controller of the app.

* Uses the `useTodos` hook to get data and functions
* Manages filter state (all / completed / pending)
* Manages search state
* Uses `useMemo` to optimize filtering and searching
* Wraps the application with `TodoContext.Provider`
* Passes final todos to `TodoList`
* Provides `toggleTodo` through Context instead of prop drilling

---

### Header.jsx

Simple UI component.

* Displays app title
* Shows a short description
* No logic or state

---

### Search.jsx

Handles searching.

* Displays input field
* Updates search state while typing
* Filters todos by title in real time
* Works together with filter
* Only controls UI

---

### Filter.jsx

Handles filtering.

* Displays dropdown menu
* Lets user choose (all / completed / pending)
* Updates filter state
* Only controls UI

---

### TodoList.jsx

Renders the list of todos.

* Shows loading text while fetching data
* Shows error message if API fails
* Shows empty state if no todos match
* Loops through todos using `.map()`
* Sends each todo to `TodoItem`
* No longer receives `toggleTodo` prop (handled by Context API)

---

### TodoItem.jsx

Displays a single todo.

* Shows checkbox and title
* Checkbox reflects completed state
* Uses Context API to access `toggleTodo`
* Clicking checkbox triggers state update
* Completed todos have line-through style

---

## Custom Hook (useTodos)

This hook handles all application logic.

It:

* Fetches data from the API
* Stores todos in state
* Manages loading and error states
* Handles toggling todo completion
* Provides filtering helper function (`getFilteredTodos`)

It returns everything needed by the app.

---

## Context API (TodoContext)

To improve architecture and avoid prop drilling, the Context API was introduced.

Instead of passing `toggleTodo` through multiple components (App → TodoList → TodoItem), it is now provided globally using Context.

This allows `TodoItem` to access it directly without intermediate props.

---

## API Service (api.js)

Handles data fetching.

* Requests todos from JSONPlaceholder API
* Checks for response errors
* Returns JSON data

---

## Performance

* The app uses `useMemo` to memoize filtered and searched todos
* Filtering and searching are only recalculated when dependencies change (todos, filter, search)
* This prevents unnecessary computations on every render
* Data is fetched only once on mount using `useEffect`, avoiding repeated API calls

---

## Trade-offs

This project uses a layered structure (components, hooks, services, context) to keep the code clean and organized.

### Pros:

* Clear separation of responsibilities
* Easy to read and maintain
* Logic is reusable and isolated in hooks
* No prop drilling (Context API used)
* Scales well with features like search and filtering
* Optimized performance using memoization

### Cons:

* More files for a small project
* Slightly more setup than a single-file approach
* Additional complexity when introducing optimizations like memoization
