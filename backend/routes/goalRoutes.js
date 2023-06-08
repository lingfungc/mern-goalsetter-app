const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Get all goals" });
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