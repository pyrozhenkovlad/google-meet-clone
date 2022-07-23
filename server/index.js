const express = require("express");
const mongoose = require("mongoose");
const router = require("./router/index.js")
require("dotenv").config();

const app = express();

app.use(express.json());
app.use('/api', router)

const PORT = process.env.PORT || 5000;
const DB_URL = process.env.DB_URL;

const start = async () => {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => {
      console.log(`server started on ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
