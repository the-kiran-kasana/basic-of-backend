const express = require("express")
const app = express();




app.get("/home" , (req ,res) => {
   res.send('<h1>Welcome to Home Page</h1>');
})

app.get("/aboutus" , (req ,res) => {
   res.json({ "message": "Welcome to About Us" });
})

app.get("/contactus" , (req ,res) => {
   res.send( "dummy contact detail");
})

app.use((req ,res) => {
   res.status(404).send("404 Not Found");
})




app.listen(3000 , () => {
   console.log("server is running on port 3000");
})