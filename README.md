# Todo App

This is a modern Todo application built with React.  
It demonstrates state management, Context API, custom hooks, performance optimization, and responsive UI design with smooth user interactions.

The app fetches todos from an external API and allows users to manage tasks efficiently with filtering, searching, and real-time updates.

---

## Features

- Fetch todos from external API
- Mark tasks as completed using checkbox
- Filter todos (All / Completed / Pending)
- Real-time search functionality
- Responsive design (mobile + desktop)
- Smooth visual feedback on interactions (hover, active, focus)
- Loading, error, and empty states
- Disabled states during loading for better UX
- Global state management using Context API (no prop drilling)
- Performance optimization using memoization
- Separated custom hooks for better architecture (useTodos, useTodoView)

---

## How the App Works

When the app loads:

1. Data is fetched from an external API
2. Todos are stored in global state using Context API
3. UI reacts to loading, error, or success state

Each todo contains:
- id
- title
- completed status

Users can:
- Mark todos as completed
- Filter todos based on status
- Search todos in real time

Filtering and search work together to produce a final visible list.

If no todos match the criteria, an empty state message is displayed.

---

## Data Flow

The application follows a clean unidirectional data flow:

API → useTodos Hook → Context API → App.jsx → useTodoView → UI Components

This ensures:
- Clear separation of concerns
- Predictable state management
- Easy scalability

---

## State Management (Context API)

The Context API is used to avoid prop drilling and share global state across the app.

It provides:
- todos
- loading state
- error state
- toggleTodo function

Instead of passing props through multiple components, TodoItem directly accesses Context.

---

## Custom Hooks

### useTodos (Data Layer)

Responsible for:
- Fetching data from API
- Managing todos state
- Handling loading and error states
- Toggling todo completion
- Providing memoized filtering helper function (getFilteredTodos)

---

### useTodoView (View Layer)

Responsible for:
- Filtering todos by status
- Searching todos by title
- Memoizing computed results using useMemo

>Note: useMemo logic was moved into a separate custom hook file (useTodoView) to improve separation of concerns and code organization.

---

## Components

### App.jsx
- Main application controller
- Manages filter and search state
- Combines Context data and derived UI logic
- Passes filtered todos to UI components

---

### Header.jsx
- Displays application title and description
- Pure UI component (no logic)

---

### Search.jsx
- Controlled input for real-time search
- Updates state while typing
- Works with filter system

---

### Filter.jsx
- Dropdown for selecting todo status
- Controls view mode (all / completed / pending)

---

### TodoList.jsx
- Renders list of todos
- Handles loading, error, and empty states
- Uses Context API for toggle functionality
- No longer receives toggleTodo as prop

---

### TodoItem.jsx
- Displays individual todo item
- Checkbox updates completion state via Context API
- Shows visual feedback for completed tasks
- Includes hover and active interaction effects

---

## Performance Optimization

- useMemo is used to prevent unnecessary recalculations
- Filtering and searching logic is isolated in useTodoView hook
- API data is fetched once using useEffect
- Context reduces prop drilling and improves maintainability

---

## UI / UX Improvements

### Responsive Design
- Mobile-first layout
- Flexbox used for adaptive layout
- Inputs stack on small screens and align horizontally on larger screens

---

### Smooth Visual Feedback on Interactions
- Hover effects on todo cards
- Active click feedback (scale animation)
- Smooth transitions for UI state changes
- Focus rings for accessibility

---

### Loading State
- Animated pulse effect while data is loading
- Prevents user interaction during loading phase

---

### Disabled State
- Checkbox disabled while loading
- Visual feedback using opacity and cursor change

---

## Trade-offs

### Pros:
- Clean architecture with separation of concerns
- Context API eliminates prop drilling
- Reusable custom hooks
- Optimized rendering with memoization
- Responsive and interactive UI

### Cons:
- More files for a small project
- Slight increase in complexity due to abstraction layers