// app.put("/v2/:id", (req, res) => {
//   const { id } = req.params;
//   const studentIdx = students.findIndex(
//     (student) => student.id === parseInt(id, 10)
//   );

//   if (studentIdx === -1) {
//     res.status(404).json({
//       error: `student with id ${id} not found`,
//     });
//     return;
//   }

//   const { firstName, lastName } = req.body;

//   if (!firstName || !lastName) {
//     res.status(400).json({
//       error: "firstName and lastName required",
//     });
//   }

//   students[studentIdx] = {
//     id: parseInt(id, 10),
//     firstName,
//     lastName,
//   };

//   res.json({
//     data: students[studentIdx],
//   });
// });

// app.patch("/v2/:id", (req, res) => {
//   const { id } = req.params;
//   const studentsIdx = students.findIndex(
//     (student) => student.id === parseInt(id, 10)
//   );

//   if (studentIdx === -1) {
//     res.status(404).json({
//       error: `student with id ${id} not found`,
//     });
//     return;
//   }

//   const { firstName, lastName } = req.body;
//   students[studentIdx] = {
//     ...students[studentIdx],
//     ...(firstName && { firstName }),
//     ...(lastName && { lastName }),
//   };

//   res.json({
//     data: students[studentIdx],
//   });
// });
