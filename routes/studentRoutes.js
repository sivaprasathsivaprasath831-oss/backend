
const express = require("express");
const router = express.Router();
console.log("Student Routes Loaded Successfully");
const Student = require("../models/Student");


// Get All Students
router.get("/", async (req, res) => {
  console.log("GET STUDENTS ROUTE HIT");
  try {
    const students = await Student.find();

    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch students",
      error: error.message,
    });
  }
});
// Register Student
router.post("/register", async (req, res) => {
  try {
   const { name, registerNumber, email, phone, department, year } = req.body;
    const newStudent = new Student({
      name,
      registerNumber,
      email,
      phone,
      department,
      year,
    });

    await newStudent.save();

    res.status(201).json({
      message: "Student registered successfully!",
      student: newStudent,
    });
  } catch (error) {
    res.status(500).json({
      message: "Registration failed",
      error: error.message,
    });
  }
});

module.exports = router;
