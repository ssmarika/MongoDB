use("kec-crud");

// ? $unwind
// ? unwind => undo or be undone after winding or being wound
// ? works in case of array only

// db.products.insertOne({
//   name: "Bottle",
//   price: 400,
//   availableColor: ["Blue", "White", "Green"],
// });

// db.products.aggregate([{ $match: {} }, { $unwind: "$availableColor" }]);

// db.learner.insertOne({
//   name: "Smriti",
//   scores: [
//     {
//       sub: "Computer Network",
//       marks: 68,
//     },
//     {
//       sub: "Project Management",
//       marks: 72,
//     },
//     {
//       sub: "Organization and Management",
//       marks: 58,
//     },
//   ],
// });

db.learner.aggregate([
  { $match: {} },
  {
    $unwind: {
      path: "$scores",
    },
  },
  {
    $sort: { "scores.marks": 1 },
  },
]);
