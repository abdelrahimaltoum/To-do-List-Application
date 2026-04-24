# Todo App
This is a simple Todo application built with React.  
It fetches todos from an external API and allows the user to mark tasks as completed using a checkbox.

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
- the UI updates immediately to show the change (line-through text)

## Data Flow

The data flows in one direction:

API → useTodos → App.jsx → TodoList → TodoItem → UI

## Components

### App.jsx
This is the main file of the app.  
It connects everything together.

- It uses the `useTodos` hook to get data
- It passes data to `TodoList`
- It passes the toggle function to update todos

### Header.jsx
This is a simple UI component.

- It displays the title of the app
- It shows a short description
- It has no logic or state

### TodoList.jsx
This component handles the list of todos.

- It shows loading text while data is being fetched
- It shows an error message if something goes wrong
- It loops through todos using `.map()`
- It sends each todo to `TodoItem`

### TodoItem.jsx
This component displays a single todo.

- It shows a checkbox and title
- Checkbox reflects the completed state
- Clicking the checkbox triggers `toggleTodo`
- Completed todos are shown with a line-through style

## Custom Hook (useTodos)

This hook handles all app logic.

It:
- Fetches data from the API
- Stores todos in state
- Manages loading and error states
- Handles toggling todo completion

It returns everything needed by the app.

## API Service (api.js)

This file handles data fetching.

- It requests todos from JSONPlaceholder API
- It checks for errors in the response
- It returns JSON data to the hook


