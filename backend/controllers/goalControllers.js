// * When we use mongoose and these functions to interact with database
// * We get back a promise, so we will use async() and await()

// * We don't want to use .try() and .catch() for the async()
// * Instead, we can use express-async-handler()
const asyncHandler = require("express-async-handler");

const Goal = require("../models/goalModel");

// Desc:      Get goals (User-specific)
// Route:     GET /api/goals
// Access:    Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();

  // res.status(200).json({ message: "Get goals" });
  res.status(200).json(goals);
});

// Desc:      Get one goal (User-specific)
// Route:     GET /api/goals/:id
// Access:    Private
const getOneGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get details of goal ID ${req.params.id}` });
});

// Desc:      Set goals
// Route:     POST /api/goals
// Access:    Private
const setGoal = asyncHandler(async (req, res) => {
  // console.log(req.body);

  if (!req.body.text) {
    // res.status(400).json({ errors: "Please add a text" });

    // * The default express.js error handler returns a text/HTML page
    res.status(400);
    throw new Error("Please add a text");
  }

  const goal = await Goal.create({
    text: req.body.text,
  });

  // res.status(200).json({ message: "Create a new goal" });
  res.status(200).json(goal);
});

// Desc:      Update a goal
// Route:     PUT /api/goals/:id
// Access:    Private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update goal ID: ${req.params.id}` });
});

// Desc:      Delete a goal
// Route:     Delete /api/goals/:id
// Access:    Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete goal ID: ${req.params.id}` });
});

module.exports = {
  getGoals,
  getOneGoal,
  setGoal,
  updateGoal,
  deleteGoal,
};
