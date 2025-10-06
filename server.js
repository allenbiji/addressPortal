import express from "express"; // if using ES Modules (add "type": "module" in package.json)
// const express = require("express"); // if using CommonJS

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON requests
app.use(express.json());

// Sample route
app.get("/", (req, res) => {
  res.send("Express backend is running!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
