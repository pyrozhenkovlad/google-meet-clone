const express = require("express");
const mongoose = require("mongoose");
const router = require("./router/index.js");
const cors = require("cors");
require("dotenv").config();

const app = express();

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use("/api", router);

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
