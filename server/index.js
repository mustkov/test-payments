require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const operRouter = require("./models/card.route");
const corsMIDD = require("./middleware/cors.middleware");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(corsMIDD);
app.use(express.json());
app.use("/api", operRouter);

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};
start();
