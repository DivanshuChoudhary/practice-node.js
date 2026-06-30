const express = require("express");
const router = express.Router();


const {
    getAllStudents,
    getStudentById
} = require("../controllers/studentController");

// GET All Students
router.get("/", (req, res) => {
    res.json(students);
});

// GET Student By ID
router.get("/:id", (req, res) => {

    const studentId = Number(req.params.id);

    const student = students.find((item) => item.id === studentId);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    res.json(student);

});

module.exports = router;