## Architecture Overview

The project is built using a simple and scalable React structure. The main idea is to separate responsibilities so that the UI, data fetching, and application logic are handled independently. This makes the code easier to understand, maintain, and extend.

---

### Folder Structure

src/
 ├── components/
 │    ├── Header.jsx
 │    ├── TodoList.jsx
 │    ├── TodoItem.jsx
 │
 ├── services/
 │    └── api.js
 │
 ├── hooks/
 │    └── useTodos.js
 │
 ├── App.jsx


### Data Flow

The application follows a clear one-direction data flow:

1. The custom hook `useTodos` is called inside `App.jsx`
2. The hook is responsible for triggering the API request using the service layer
3. Data is fetched from the external API and returned to the hook
4. The hook manages three states: todos, loading, and error
5. These values are returned from the hook to `App.jsx`
6. `App.jsx` passes the data down to the `TodoList` component
7. `TodoList` renders each todo item using the `TodoItem` component


### Role of Each Layer

Components Layer  
The components are responsible only for displaying the user interface. They do not handle data fetching or application logic. Each component has a single responsibility, such as rendering a header, a list, or a single todo item.

Hooks Layer  
The custom hook handles the main application logic. In this project, `useTodos` is responsible for fetching data, managing loading state, and handling errors. This keeps the main component clean and focused on structure rather than logic.

Services Layer  
The service layer is responsible for communicating with external APIs. The `fetchTodos` function handles the HTTP request and returns the data in a usable format. This separation makes it easy to manage or replace API calls in the future.

### Why This Structure Was Used

This structure was chosen to improve code clarity and maintainability. By separating concerns, each part of the application becomes easier to manage and test. It also allows the project to scale more easily if new features are added later, such as creating or deleting todos.

Another benefit of this structure is that it keeps the main App component clean and focused only on connecting different parts of the application.

### Trade-offs

The main trade-off of this approach is that it adds a small amount of complexity for a simple project. However, this is intentional to demonstrate a real-world architecture pattern.

For a small application, some of these layers might feel unnecessary, but they are useful for learning and preparing for larger projects.
