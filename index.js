const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const app = express();

const PORT = config.get("PORT");
const URI = config.get("URI");

const LeadRouter = require("./LeaderBoardRouter");

app.use(express.json());
app.use("/", LeadRouter);
const start = async () => {
  try {
    await mongoose.connect(URI);
    app.listen(PORT, () => {
      console.log(`Server started om PORT ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
