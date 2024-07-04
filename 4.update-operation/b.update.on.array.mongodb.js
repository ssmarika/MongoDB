use("kec-crud");

// ? update on array

// ? $push
// ? add 92 on marks of Rajan

// db.scores.updateOne({ name: "Rajan" }, { $push: { marks: 92 } });

// ? add 57 and 93 to marks of suyasha
// need to use an extra function each
// db.scores.updateOne(
//   { name: "Smarika" },
//   { $push: { marks: { $each: [57, 93] } } }
// );
// db.scores.find();

// ?pop
// ? 1 => removes item from end of array
// ? -1 => removes item from starting of array

// ? remove item from the end of Suyasha marks
// db.scores.updateOne({ name: "Suyasha" }, { $pop: { marks: 1 } });

// db.scores.find();

// ? remove item from the starting of Suyasha marks
// db.scores.updateOne({ name: "Suyasha" }, { $pop: { marks: -1 } });

// db.scores.find();

// ? pull => removes item based upon condition
// db.scores.updateOne({ name: "Smarika" }, { $pull: { marks: { $lt: 70 } } });
// db.scores.find();

// db.scores.updateOne(
//   { name: "Smarika" },
//   { $pull: { points: { sub: "Science" } } }
// );

// ?change subject from science to social
// ! use $ operator
// db.scores.updateOne(
//   { name: "Suyasha", "points.sub": "Science" },
//   { $set: { "points.$.sub": "Maths" } }
// );
// db.scores.find();

// ?pull item which has sub "Science" and marks less than 88 from Rajan's data
// db.scores.updateOne(
//   { name: "Rajan" },
//   { $pull: { points: { sub: "Science" }, marks: { $lt: 88 } } }
// );
// db.scores.find();

// ? pullAll
// ? we give complete value which needs to be removed
// ? no condition we just specify value to be extracted
// db.scores.updateOne(
//   { _id: ObjectId("66851fd2aee260f76f68072c") },
//   {
//     $pullAll: {
//       marks: [42, 65],
//     },
//   }
// );
// db.scores.find();

// ? push 78,67,83 to the marks of Rajan
// db.scores.updateOne(
//   { name: "Rajan" },
//   { $push: { marks: { $each: [78, 67, 83] } } }
// );
// db.scores.find();

// db.scores.updateOne(
//   { name: "Rajan" },
//   { $push: { marks: { $each: [78, 67, 83] } } }
// );
// db.scores.find();

// ? addToSet
// add the value if only it does not exist
// similar to set no repeatation is allowed only the value not available is added
// works in object level as well

// db.scores.updateOne(
//   { name: "Rajan" },
//   { $addToSet: { marks: { $each: [95, 83, 88, 52] } } }
// );

// db.scores.find();

// db.scores.updateOne(
//   { name: "Rajan" },
//   { $addToSet: { points: { sub: "Social", point: "83" } } }
// );
// db.scores.find();

// if the point was set 82 the same value social and 82 exist so no object is added

// ? push an object with sub:Science and point:92 on suyasha points
// db.scores.updateOne(
//   { name: "Suyasha" },
//   { $push: { points: { sub: "Science", point: 92 } } }
// );
// db.scores.find();

// ? push 57, 88, 96 on Suyashas marks such that no value id duplicated
// db.scores.updateOne(
//   { name: "Suyasha" },
//   { $addToSet: { marks: { $each: [57, 88, 96] } } }
// );
// db.scores.find();

// ? change Rajan's lucky colour to "orange"
// db.scores.updateOne(
//   { name: "Rajan" },
//   { $set: { luckyThings: { colour: "Orange" } } }
// );
// db.scores.find();

// ? pull last item from Rajan's points
// db.scores.updateOne({ name: "Rajan" }, { $pop: { points: 1 } });
// db.scores.find();

// ? decrease age of Smarika by 20
// db.scores.updateOne({ name: "Smarika" }, { $inc: { age: -20 } });
// db.scores.find();

// ?push {sub:"C Program",point:72} and {sub:"C++",point:65} on Smarika's points
// db.scores.updateOne(
//   { name: "Smarika" },
//   {
//     $push: {
//       points: {
//         $each: [
//           { sub: "C Program", point: 72 },
//           { sub: "C++", point: 65 },
//         ],
//       },
//     },
//   }
// );
// db.scores.find();

// ? divide age of Rajan by 2
db.scores.updateOne({ name: "Rajan" }, { $mul: { age: 1 / 2 } });
db.scores.find();
