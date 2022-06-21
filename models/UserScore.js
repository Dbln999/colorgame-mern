const { Schema, model } = require("mongoose");

const schema = new Schema({
  username: { type: String, required: true, unique: false },
  score: { type: Number, required: true, unique: false },
});

module.exports = model("Userscore", schema);
