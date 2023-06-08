const getGoals = (req, res) => {
  res.status(200).json({ message: "Get all goals" });
};

module.exports = {
  getGoals,
};
