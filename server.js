const express = require("express");

const app = express();

const PORT = 3000;

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

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});