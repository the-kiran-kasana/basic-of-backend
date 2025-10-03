const express = require("express");
const eventLogger = require("./eventLogger");
const delayMessage = require("./delay");

const app = express();
const PORT = 3000;

// Test route
app.get("/test", (req, res) => {
  res.send("Test route is working!");
});



// Route: /emit?message=HelloWorld
app.get("/emit", (req, res) => {
  const { message } = req.query;
  // Emit a custom log event
  eventLogger.emit("log", message);

  res.json({ status: "success", message: `Log event emitted with message: ${message}` });
});




// Route: /delay?message=Hello&time=3000
app.get("/delay", async (req, res) => {
  const { message, time } = req.query;

  if (!message || !time) {
    return res.status(400).json({ error: "Please provide both message and time query parameters" });
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
