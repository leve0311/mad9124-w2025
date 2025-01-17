const students = [
  {
    id: 1,
    name: "Steve",
    grade: "A+",
  },
  {
    id: 2,
    name: "Ramona",
    grade: "B",
  },
  {
    id: 3,
    name: "Agnes",
    grade: "F",
  },
  {
    id: 4,
    name: "Grungus",
    grade: "C-",
  },
];

// filter
const passingStudents = students.filter((student) => student.grade != "F");
console.log(passingStudents);

// map
const justNames = students.map((students) => students.name);
console.log(justNames);

// reduce
const namesAsString = students.reduce((acc, cv) => `${acc}, ${cv.name}`);
console.log(namesAsString);

console.log([1, 2, 3, 4, 5, 6].reduce((acc, cv) => acc + cv));

students.forEach((student) => {
  console.log(student);
});
