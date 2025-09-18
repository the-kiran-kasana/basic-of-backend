const fs = require("fs").promises;


const fileHandle = async () => {
    const data = await fs.readFile("data.txt", "utf-8");
   console.log(data)

   let newData = "This is Appended data";
   await fs.appendFile("data.txt", newData, "utf-8");
   const updatedData = await fs.readFile("data.txt", "utf-8");
   console.log(updatedData);
}

module.exports = {fileHandle};
