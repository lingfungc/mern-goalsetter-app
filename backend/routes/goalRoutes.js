const express = require("express");
const router = express.Router();

const { getGoals } = require("../controllers/goalControllers");

// router.get("/", (req, res) => {
//   res.status(200).json({ message: "Get all goals" });
// });

router.get("/", getGoals);

router.get("/:id", (req, res) => {
  res.status(200).json({ message: `Get details of goal ID ${req.params.id}` });
});

router.post("/", (req, res) => {
  res.status(200).json({ message: "Create a new goal" });
});

router.put("/:id", (req, res) => {
  res.status(200).json({ message: `Update goal ID: ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({ message: `Delete goal ID: ${req.params.id}` });
});

module.exports = router;
