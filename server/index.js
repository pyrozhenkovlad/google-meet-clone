const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    app.listen(PORT || 5000, () => {
      console.log(`server started on ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
