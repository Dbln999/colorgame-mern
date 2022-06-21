const Router = require("express");
const router = new Router();
const { check } = require("express-validator");
const controller = require("./leaderBoardController");
router.post(
  "/add",
  [
    check("username", "Username must contain at least 1 symbol").isLength({
      min: 1,
      max: 20,
    }),
  ],
  controller.addScore
);
router.get("/get", controller.getLeaderboard);
router.put("/:id", controller.updateScore);

module.exports = router;
