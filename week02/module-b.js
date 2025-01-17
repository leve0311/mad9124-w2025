const someOtherVar = "B";
const sayHello = function (name) {
  console.log(`Hello, ${name}!`);
};

/* module.exports.someOtherVar = someOtherVar;
module.exports.sayHello = sayHello; */

module.exports = {
  someOtherVar,
  sayHello,
};
