# Todo App

This is a modern Todo application built with React.  
It demonstrates real-world frontend concepts such as state management, Context API, custom hooks, performance optimization, and responsive UI design with smooth user interactions.

The app fetches todos from an external API and allows users to manage tasks efficiently through filtering, searching, and real-time updates.

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
- Clean architecture using custom hooks (useTodos, useTodoView)

---

## How the App Works

When the application starts:

1. Todos are fetched from an external API
2. Data is stored in global state using Context API
3. The UI reacts based on loading, success, or error state

Each todo item contains:
- id
- title
- completed status

Users can:
- Mark todos as completed or incomplete
- Filter tasks based on status
- Search tasks in real time

Filtering and search work together to produce the final visible list.

If no todos match the selected filter or search query, an empty state message is displayed.

---

## Data Flow

The application follows a clean unidirectional data flow:

API → useTodos Hook → Context API → App.jsx → useTodoView Hook → UI Components

This ensures:
- Predictable state updates
- Clear separation of logic and UI
- Easy scalability and debugging

---

## State Management (Context API)

The Context API is used to avoid prop drilling and manage global state across the app.

It provides:
- todos
- loading state
- error state
- toggleTodo function

This allows components like TodoItem to access and update global state directly without passing props through multiple layers.

---

## Custom Hooks

### useTodos (Data Layer)

Responsible for:
- Fetching data from API
- Managing todos state
- Handling loading and error states
- Toggling todo completion
- Providing helper utilities for state updates

---

### useTodoView (View Layer)

Responsible for:
- Filtering todos by status (all / completed / pending)
- Searching todos by title
- Memoizing computed results using useMemo

This separation ensures that UI logic is isolated from data logic.

---

## Components

### App.jsx
- Main application controller
- Manages UI state (filter, search, pagination, dark mode)
- Combines global state with derived UI logic
- Passes processed data to child components

---

### Header.jsx
- Displays application title and description
- Handles dark mode toggle
- Pure UI component

---

### Search.jsx
- Controlled input field for live search
- Updates state on every keystroke
- Works alongside filter system

---

### Filter.jsx
- Dropdown selector for todo status
- Controls view mode (all / completed / pending)

---

### TodoList.jsx
- Renders list of todos
- Handles loading, error, and empty states
- Uses Context API for toggle functionality
- Responsible for rendering TodoItem components

---

### TodoItem.jsx
- Displays individual todo item
- Checkbox updates completion state via Context API
- Shows visual feedback for completed tasks
- Includes hover and active animations for better UX

---

## Performance Optimization

- useMemo prevents unnecessary recalculations in filtering logic
- useTodoView isolates and optimizes derived UI state
- API data is fetched once using useEffect
- Context API reduces prop drilling and improves maintainability

---

## UI / UX Improvements

### Responsive Design
- Mobile-first layout approach
- Flexible layout using Flexbox
- Inputs stack vertically on mobile and align horizontally on larger screens

---

### Interaction Feedback
- Hover effects on todo cards
- Active click animations (scale effect)
- Smooth transitions between UI states
- Focus states for accessibility

---

### Loading State
- Spinner / animated loading indicator
- Prevents user interaction during data fetching

---

### Disabled State
- Checkbox disabled during loading
- Visual feedback using opacity and cursor changes

---

## Trade-offs

### Pros:
- Clean and scalable architecture
- Separation of concerns (data, logic, UI)
- Reusable custom hooks
- Optimized rendering with memoization
- Responsive and modern UI

### Cons:
- Increased number of files for a small project
- Slight complexity due to abstraction layers