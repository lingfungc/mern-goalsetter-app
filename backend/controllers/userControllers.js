const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");

const User = require("../models/userModel");

// Desc:      Register a user
// Route:     POST /api/users
// Access:    Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  // * Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // * Create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    // res.status(201).json(user);

    // * The "_" is a convention to indicate that the "id" is for internal or private user
    // * Also, the "id" is not meant to be accessed or modified directly by the external code
    res.status(201).json({ _id: user.id, name: user.name, email: user.email });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// Desc:      Authenticate a user
// Route:     POST /api/users/login
// Access:    Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

// Desc:      Get user data
// Route:     GET /api/users/dashboard
// Access:    Public
const getUser = (req, res) => {
  res.json({ message: "Display user data" });
};

module.exports = { registerUser, loginUser, getUser };
