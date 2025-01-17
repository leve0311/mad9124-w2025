//variables
const name = 'Tim';
let age = 33;
age = age + 1;

//strings
const str = '123';
// truthy = has characters
// falsey = ' '
// numbers

//numbers
const num = 123;
// falsey 0
// boolean

//boolean
const bool = true;
// false is falsey

//object
const obj = {
    key: 'value',
};
//always truthy

//array
const arr = [1,2,3];
//always truthy

//functions
function sum(a, b) {
    return a + b;
}
console.log(sum(1, 1));
console.log(sum(1, 2));
console.log(sum(1, 3));

const difference = (a,b) => {
    return a - b;
};

console.log(difference(3, 1));
console.log(difference(3, 2));
console.log(difference(3, 3));

const myClass

myClass.test();
myClass.test1();

const signMyName = (name, generateMessage) => {
    return generateMessage(name);
};

signMyName('tim', (name) => console.log('Hello from ' + name));
signMyName('adam', (name) => console.log('Goodbye from ' + name));



Object.keys({a: 1, b: 2}); // [ 'a', 'b']
Object.values({a: 1, b: 2}); // [ 1, 2 ]
Object.entries({a: 1, b: 2}); // [ ['a', 1], ['b', 2]]