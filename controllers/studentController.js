const students = require("../data/students");

const getAllStudents = (req, res) => {
    res.json(students);
};

const getStudentById = (req, res) => {

    const studentId = Number(req.params.id);

    const student = students.find((item) => item.id === studentId);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    res.json(student);
};

module.exports = {
    getAllStudents,
    getStudentById
};