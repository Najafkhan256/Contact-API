const express = require("express");
const Students = require("../models/students");

// 1:create router
const router = new express.Router();

// create new students
router.post("/students", async (req, res) => {
  try {
    const user = new Students(req.body);
    const createStudent = await user.save();
    res.status(201).send(createStudent);
  } catch (err) {
    res.status(400).send(err);
  }
});

// getting students data
router.get("/students", async (rea, res) => {
  try {
    const studentsData = await Students.find();
    res.send(studentsData);
  } catch (err) {
    res.send(err);
  }
});

// getting indivisoual student Data
router.get("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getStudent = await Students.findById(_id);
    if (!getStudent) {
      res.status(404).send();
    } else {
      res.send(getStudent);
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

// update indivisoual student Data by id
router.patch("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updateStudent = await Students.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    if (!updateStudent) {
      res.status(404).send();
    } else {
      res.send(updateStudent);
    }
  } catch (err) {
    res.status(404).send(err);
  }
});

// delete student
router.delete("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteStudent = await Students.findByIdAndDelete(_id);
    if (!_id) {
      res.status(404).send();
    } else {
      res.send(deleteStudent);
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
