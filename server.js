
const express = require("express");
const mongoose = require("mongoose");

//Routes
const registerpatientsRoute = require("./routes");

const port = 8000;
const mongo = "mongodb://0.0.0.0:27017/test";

// express app
const app = express();
app.use(express.json());

//Use ROutes
app.use("/routes", registerpatientsRoute);

mongoose
  .connect(mongo)
  .then(() => {
    app.listen(port, () => {
      console.log(
        `Connected to server and running on http://localhost:${port}`
      );
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });


