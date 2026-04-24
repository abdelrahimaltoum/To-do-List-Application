// Function to fetch todos from external API
export const fetchTodos = async () => {

  // Send HTTP request to the API endpoint
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?"
  );

  // Check if the request was successful
  // If not, throw an error to be handled later
  if (!response.ok) {
    throw new Error("Failed to fetch todos");
  }

  // Convert response data to JSON format and return it
  return response.json();
};