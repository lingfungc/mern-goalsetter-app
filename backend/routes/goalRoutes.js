// * Common JS Syntax
const express = require("express");
const router = express.Router();

const {
  getGoals,
  getOneGoal,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalControllers");

// router.get("/", (req, res) => {
//   res.status(200).json({ message: "Get all goals" });
// });

// router.get("/", getGoals);
// router.get("/:id", getOneGoal);
// router.post("/", setGoal);
// router.put("/:id", updateGoal);
// router.delete("/:id", deleteGoal);

router.route("/").get(getGoals).post(setGoal);
router.route("/:id").get(getOneGoal).put(updateGoal).delete(deleteGoal);

module.exports = router;
