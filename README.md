# Todo App

This is a simple Todo application built with React.
It fetches todos from an external API and allows the user to mark tasks as completed using a checkbox.

It also includes:

* filtering (all / completed / pending)
* search (filter todos by title in real time)

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

Filtering and searching both happen in `App.jsx` using data from the hook.

---

## Components

### App.jsx

This is the main controller of the app.

* Uses the `useTodos` hook to get data and functions
* Manages filter state (all / completed / pending)
* Manages search state
* Applies filtering first, then search
* Passes final todos to `TodoList`
* Passes toggle function to update todos

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

---

### TodoItem.jsx

Displays a single todo.

* Shows checkbox and title
* Checkbox reflects completed state
* Clicking checkbox triggers `toggleTodo`
* Completed todos have line-through style

---

## Custom Hook (useTodos)

This hook handles all application logic.

It:

* Fetches data from the API
* Stores todos in state
* Manages loading and error states
* Handles toggling todo completion
* Provides filtering function (`getFilteredTodos`)

It returns everything needed by the app.

---

## API Service (api.js)

Handles data fetching.

* Requests todos from JSONPlaceholder API
* Checks for response errors
* Returns JSON data

---

## Trade-offs

This project uses a layered structure (components, hooks, services) to keep the code clean and organized.

### Pros:

* Clear separation of responsibilities
* Easy to read and maintain
* Logic is reusable and isolated in hooks
* Scales well with features like search and filtering

### Cons:

* More files for a small project
* Slightly more setup than a single-file approach
