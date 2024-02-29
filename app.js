// app.js

const express = require("express");
const { erpnextAuth } = require("./middlewares/erpnext-auth");

const app = express();
const port = 3000;

app.use(erpnextAuth);

// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.post("/webhook", erpnextAuth);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
