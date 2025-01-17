const students = require("./students.json");

function say(message) {
  console.log(message);
}

students.forEach(({ firstName, lastName }) =>
  say(`Hello ${firstName} ${lastName}`)
);
console.log();

let studentsD = 0;

const studentsLastNameD = students.forEach(({ lastName }) => {
  if (lastName.startsWith("D")) {
    studentsD++;
  } else {
    return;
  }
});
say(`Count of the last names starting with D is ${studentsD}`);
console.log();

// const studentEmails = say("[");
// students.forEach(({ firstName }) => {
//   say(` ${firstName}@algonquincollege.com`);
// });
// say("]");

const emails = students.map(
  (student) => `${student.firstName.toLowerCase()}@algonquincollege.com`
);

console.log(
  "[\n" +
    emails
      .map(
        (email, index) =>
          `     '${email}'${index < emails.length - 1 ? "," : ""}`
      )
      .join("\n") +
    "\n]"
);
