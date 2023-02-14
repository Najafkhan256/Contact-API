const mongoose = require("mongoose");
const validator = require("validator");

const studentsSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    minLength: 3,
  },
  email: {
    type: String,
    require: true,
    unique: [true, "Email is already present"],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email");
      }
    },
  },
  phone: {
    type: Number,
    min: 10,
    required: true,
    unique: true,
  },
  message: {
    type: String,
    required: true,
  },
});

// we will create new collection
const Students = new mongoose.model("Student", studentsSchema);

module.exports = Students;
