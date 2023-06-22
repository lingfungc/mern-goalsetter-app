// * This is for making HTTP requests, sending the data back and setting data in localStorage

// The axios provides a simple and elegant way to make HTTP requests
import axios from "axios";

const API_URL = "/api/users/";

// Register user
const register = async (userData) => {
  // This "response" is the "response" in fetch API
  // We are sending the HTTP POST request to the backend "user" route and controller
  const response = await axios.post(API_URL, userData);

  // This "response.data" is in JSON
  // The localStorage only accepts string type, that's why we need to JSON.stringify()
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Login
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Logout
const logout = async () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
