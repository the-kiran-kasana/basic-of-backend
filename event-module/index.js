const express = require("express");
const fileInfo = require("./fileinfo");
const urlParser = require("./urlparser");
const eventLogger = require("./eventLogger");
const delayMessage = require("./delay");

const app = express();
const PORT = 3000;

// Test route
app.get("/test", (req, res) => {
  res.send("Test route is working!");
});

// Route: /fileinfo?filepath=/path/to/file.txt
app.get("/fileinfo", (req, res) => {
  const { filepath } = req.query;

  if (!filepath) {
    return res.status(400).json({ error: "Please provide a filepath query parameter" });
  }

  const info = fileInfo(filepath);
  res.json(info);
});

// Route: /parseurl?url=https://example.com/test?name=John&age=25
app.get("/parseurl", (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: "Please provide a url query parameter" });
  }

  const parsed = urlParser(url);
  res.json(parsed);
});

// Route: /emit?message=HelloWorld
app.get("/emit", (req, res) => {
  const { message } = req.query;

  if (!message) {
    return res.status(400).json({ error: "Please provide a message query parameter" });
  }

  // Emit a custom log event
  eventLogger.emit("log", message);

  res.json({ status: "success", message: `Log event emitted with message: ${message}` });
});

// Route: /delay?message=Hello&time=3000
app.get("/delay", async (req, res) => {
  const { message, time } = req.query;

  if (!message || !time) {
    return res
      .status(400)
      .json({ error: "Please provide both message and time query parameters" });
  }

  const ms = parseInt(time, 10);
  if (isNaN(ms) || ms < 0) {
    return res.status(400).json({ error: "Time must be a valid positive number in milliseconds" });
  }

  const delayedMessage = await delayMessage(message, ms);
  res.json({ status: "success", message: delayedMessage, delay: ms });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
