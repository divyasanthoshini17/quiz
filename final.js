const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
require("dotenv").config();
var dbConnect = require("./db");
dbConnect();
app.use(cors());

app.get("/api/quiz", async (req, res) => {
  try {
    const response = await axios.get(
      "https://the-trivia-api.com/api/questions?limit=5"
    );

    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch quiz" });
  }
});

app.listen(process.env.PORT, () => {
  console.log("Server uriking on " + process.env.PORT);
});