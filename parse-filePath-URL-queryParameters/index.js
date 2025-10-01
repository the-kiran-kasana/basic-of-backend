const express = require("express");
const fileInfo = require("./fileinfo");
const urlParser = require("./urlparser");


const app = express();

app.get("/test", (req ,res) => {
   res.send("Test route is working!");
})

// Route: /fileinfo?filepath=/path/to/file.txt
//http://localhost:3000/fileinfo?filepath=/Users/kiran/project/app.js

app.get("/fileinfo", (req, res) => {
  const { filepath } = req.query;

  const info = fileInfo(filepath);
  console.log(info);
  res.json(info);
});




// Route: /parseurl?url=https://example.com/test?name=John&age=25
//http://localhost:3000/parseurl?url=https://example.com/test?name=John&age=25

app.get("/parseurl", (req, res) => {
  const { url } = req.query;

  const parsed = urlParser(url);
  console.log(parsed);
  res.json(parsed);
});


app.listen(3000 , () => {
  console.log("server is running on port 2000");
})