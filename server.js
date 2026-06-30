const express = require("express");

const app = express();

app.use(express.json());

const PORT = 3000;

const students = [
    {
        id: 1,
        name: "Divanshu",
        course: "B.Tech CSE",
        age: 18
    },
    {
        id: 2,
        name: "Rahul",
        course: "B.Tech IT",
        age: 19
    },
    {
        id: 3,
        name: "Aman",
        course: "BCA",
        age: 20
    }
];

app.get("/", (req, res) => {
    res.send("<h1>🚀 Welcome to Student Management API</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h2>About Student Management API</h2>");
});

app.get("/contact", (req, res) => {
    res.send("<h2>Contact: support@studentapi.com</h2>");
});

app.get("/health", (req, res) => {
    res.send("API is running successfully ✅");
});

app.get("/students", (req, res) => {
    res.json(students);
});

app.get("/students/:id", (req, res) => {

    const studentId = Number(req.params.id);

    const student = students.find((item) => item.id === studentId);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    res.json(student);

});

app.post("/students", (req, res) => {

    const newStudent = req.body;

    students.push(newStudent);

    res.status(201).json({
        message: "Student added successfully",
        student: newStudent
    });

});

app.put("/students/:id", (req, res) => {

    const studentId = Number(req.params.id);

    const student = students.find((item) => item.id === studentId);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    student.name = req.body.name || student.name;
    student.course = req.body.course || student.course;
    student.age = req.body.age || student.age;

    res.json({
        message: "Student updated successfully",
        student
    });

});

app.delete("/students/:id", (req, res) => {

    const studentId = Number(req.params.id);

    const studentIndex = students.findIndex((item) => item.id === studentId);

    if (studentIndex === -1) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    const deletedStudent = students.splice(studentIndex, 1);

    res.json({
        message: "Student deleted successfully",
        student: deletedStudent[0]
    });

});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});