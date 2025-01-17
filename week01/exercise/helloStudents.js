const students = require("./students.json");

function say(message) {
  console.log(message);
}

students.forEach(({ firstName, lastName }) =>
  say(`Hello ${firstName} ${lastName}`)
);
console.log(); // spacing

let studentsD = 0;

const studentsLastNameD = students.forEach(({ lastName }) => {
  if (lastName.startsWith("D")) {
    studentsD++;
  } else {
    return;
  }
});
say(`Count of the last names starting with D is ${studentsD}`);

// Added from class ////////////
// const count = students.reduce(
//   (total, cv) => total + (cv.lastName[0].toUpperCase() === "D" ? 1 : 0),
//   0
// );
console.log(); // spacing between
// const studentEmails = say("[");
// students.forEach(({ firstName }) => {
//   say(` ${firstName}@algonquincollege.com`);
// });
// say("]");

const emails = students.map(
  (students) => `${students.firstName.toLowerCase()}@algonquincollege.com`
);

console.log(emails);

// console.log(
// "[\n" +
//   emails
//     .map(
//       (email, index) =>
//         `     '${email}'${index < emails.length - 1 ? "," : ""}`
//     )
//     .join("\n") +
//   "\n]"
// );
