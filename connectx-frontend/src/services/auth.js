// auth.js
const TOKEN_KEY = "jwtToken";

// Save the JWT token to the local storage
export const saveToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

// Load the JWT token from the local storage
export const loadToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

// Remove the JWT token from the local storage
export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

// Check if the user is authenticated by verifying if the JWT token exists in the local storage
export const isAuthenticated = () => {
  const token = loadToken();
  return !!token;
};
