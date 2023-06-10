// Desc:      Get goals (User-specific)
// Route:     GET /api/goals
// Access:    Private
const getGoals = (req, res) => {
  res.status(200).json({ message: "Get goals" });
};

// Desc:      Get one goal (User-specific)
// Route:     GET /api/goals/:id
// Access:    Private
const getOneGoal = (req, res) => {
  res.status(200).json({ message: `Get details of goal ID ${req.params.id}` });
};

// Desc:      Set goals
// Route:     POST /api/goals
// Access:    Private
const setGoal = (req, res) => {
  // console.log(req.body);

  if (!req.body.message) {
    // res.status(400).json({ errors: "Please add a message" });

    // * Using express.js error handler, which returns a text/HTML page
    res.status(400);
    throw new Error("Please add a message");
  }

  res.status(200).json({ message: "Create a new goal" });
};

// Desc:      Update a goal
// Route:     PUT /api/goals/:id
// Access:    Private
const updateGoal = (req, res) => {
  res.status(200).json({ message: `Update goal ID: ${req.params.id}` });
};

// Desc:      Delete a goal
// Route:     Delete /api/goals/:id
// Access:    Private
const deleteGoal = (req, res) => {
  res.status(200).json({ message: `Delete goal ID: ${req.params.id}` });
};

module.exports = {
  getGoals,
  getOneGoal,
  setGoal,
  updateGoal,
  deleteGoal,
};
