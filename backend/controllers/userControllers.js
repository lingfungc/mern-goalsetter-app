// Desc:      Register a user
// Route:     POST /api/users
// Access:    Public
const registerUser = (req, res) => {
  res.json({ message: "Register a user" });
};

// Desc:      Authenticate a user
// Route:     POST /api/users/login
// Access:    Public
const loginUser = (req, res) => {
  res.json({ message: "Authenticate a user and login" });
};

// Desc:      Get user data
// Route:     GET /api/users/dashboard
// Access:    Public
const getUser = (req, res) => {
  res.json({ message: "Display user data" });
};

module.exports = { registerUser, loginUser, getUser };
