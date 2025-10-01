const express = require("express");

const app = express();

app.get("/test", (req ,res) => {
   res.send("Test route is working!");
})

app.listen(2000 , () => {
  console.log("server is running on port 2000");
})