const { someOtherVar, sayHello } = require("./module-b");

const log = console.log;

const someVar = "A";

sayHello("James");

console.log(someVar);
console.log(someOtherVar);

console.log("filename", __filename);
console.log("filename", __dirname);
