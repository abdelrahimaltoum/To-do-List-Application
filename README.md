# Todo App

This is a simple Todo application built with React.  
It fetches todos from an external API and allows the user to mark tasks as completed using a checkbox.

It also includes filtering so the user can view:
- all todos
- only completed todos
- only pending todos

---

## How the app works

When the app starts, it loads data from an external API.  
The data is a list of todos, and each todo has:
- id
- title
- completed status

The app then displays these todos on the screen.

Each todo has a checkbox.  
When the checkbox is clicked:
- the todo's completed state is updated
- the UI updates immediately (line-through text is shown for completed tasks)

The user can also filter the list using a dropdown:
- All → shows everything
- Completed → shows only completed todos
- Pending → shows only incomplete todos

---

## Data Flow

The data flows in one direction:

API → useTodos → App.jsx → TodoList → TodoItem → UI

Filtering happens in App.jsx using data from the hook.

---

## Components

### App.jsx
This is the main controller of the app.

- It uses the `useTodos` hook to get data and functions
- It manages the filter state (all / completed / pending)
- It applies filtering logic using `getFilteredTodos`
- It passes filtered data to `TodoList`
- It passes the toggle function to update todos

---

### Header.jsx
This is a simple UI component.

- Displays the app title
- Shows a short description
- Has no logic or state

---

### Filter.jsx
This component handles filtering.

- Displays a dropdown menu
- Allows user to select filter type (all, completed, pending)
- Updates filter state in App.jsx
- Only controls UI, not data logic

---

### TodoList.jsx
This component renders the list of todos.

- Shows loading text while fetching data
- Shows error message if API fails
- Loops through filtered todos using `.map()`
- Sends each todo to `TodoItem`

---

### TodoItem.jsx
This component displays a single todo.

- Shows a checkbox and title
- Checkbox reflects completed state
- Clicking checkbox triggers `toggleTodo`
- Completed todos are shown with a line-through style

---

## Custom Hook (useTodos)

This hook handles all application logic.

It:
- Fetches data from the API
- Stores todos in state
- Manages loading and error states
- Handles toggling todo completion
- Provides filtering function (`getFilteredTodos`)

It returns everything needed by the app.

---

## API Service (api.js)

This file handles data fetching.

- Requests todos from JSONPlaceholder API
- Checks for response errors
- Returns JSON data to the hook

---

## Trade-offs

This project uses a slightly layered structure (components, hooks, services) to keep the code clean and organized.

### Pros:
- Clear separation of responsibilities
- Easy to read and maintain
- Logic is reusable and isolated in hooks
- Scales well if new features are added (search, edit, delete)

### Cons:
- Slightly more files and structure for a small project
- More setup compared to putting everything in App.jsx
