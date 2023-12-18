const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const registerpatientsSchema = new Schema({
  PatientID: {
    type: String,
  },
  name: {
    type: String,
  },
  gender: {
    type: String,
  },
});

module.exports = mongoose.model("registerpatients", registerpatientsSchema);
