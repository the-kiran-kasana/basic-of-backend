const eventEmitter = require("events");
// Create an event emitter instance
const newEventEmitter = new eventEmitter();


// Custom event listener for "log"
newEventEmitter.on("log" , (message) => {

const  timestamp = new Date().toISOString();

console.log(`[${timestamp}] ${message}`);
})

module.exports = eventEmitter;
