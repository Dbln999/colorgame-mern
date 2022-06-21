const Leaderboard = require("./models/UserScore");
const { validationResult } = require("express-validator");

class leaderBoardController {
  async addScore(req, res) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        res.status(400).json("User addition errors" + errors);
      }

      const { username, score } = req.body;

      const candidate = await Leaderboard.findOne({
        username: username,
      });

      if (candidate) {
        return res.status(400).json({ message: "This username already busy" });
      }

      const newScore = new Leaderboard({
        username: username,
        score: score,
      });

      await newScore.save();

      return res.status(201).json({ message: "Score saved successfully" });
    } catch (e) {
      res.status(500).json({ message: "Server addition error" });
    }
  }
  async getLeaderboard(req, res) {
    try {
      const scores = await Leaderboard.find();
      res.json(scores);
    } catch (e) {
      console.log("Getting error" + e);
    }
  }
  async updateScore(req, res) {
    try {
      const score = await Leaderboard.findOneAndUpdate(
        { _id: req.params.id },
        req.body
      );
      res.json(score);
    } catch (e) {
      res.status(500).json({ message: "Error in updating score" });
    }
  }
}

module.exports = new leaderBoardController();
