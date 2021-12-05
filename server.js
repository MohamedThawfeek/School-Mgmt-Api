const express = require("express");

const connectDB = require("./config/db");

const apiRouter = require("./routes");

const app = express();

const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json());

app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.send("It's working");
});

app.listen(PORT, () => {
  console.log("Server is Up and running");
});
