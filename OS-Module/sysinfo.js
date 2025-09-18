const os = require('os');

const getSystemInfo = () =>{

  console.log("System architecture = " , os.arch());
  console.log("Number of CPU cores = " , os.arch());
  console.log("OS type = " , os.type());
  console.log("Hostname = " , os.hostname());


}

module.exports = {getSystemInfo}