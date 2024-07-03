use("kec-crud");

// db.scores.find();

// ? $set
// db.scores.updateOne({ name: "Subham" }, { $set: { name: "Rajan" } });

// db.scores.updateMany({}, { $set: { age: 21 } });

// ? $unset=> removes that field
// as we are trying to remove the value so the value can be left unfilled
// db.scores.updateOne({ name: "Rajan" }, { $unset: { age: "" } });
// db.scores.find();

// ? update age of rajan to 30
// db.scores.updateOne({ name: "Rajan" }, { $set: { age: 30 } });
// db.scores.find();

// ? uodate age of suyasha to 40
// db.scores.updateOne({ name: "Suyasha" }, { $set: { age: 40 } });
// db.scores.find();

// ? $inc=> increases value of field by provided value
// db.scores.updateMany({}, { $inc: { age: 5 } });
// db.scores.find();

// db.scores.insertOne({
//   name: "Smarika",
//   scores: [42, 65, 88],
//   points: [
//     {
//       sub: "Social",
//       point: 67,
//     },
//     {
//       sub: "Science",
//       point: 89,
//     },
//   ],
//   age: 26,
// });

// db.scores.updateMany({ name: "Smarika" }, { $inc: { age: -10 } });
// db.scores.find();

// ? $mul => multiply
// db.scores.updateOne(
//   { _id: ObjectId("66851fd2aee260f76f68072c") },
//   { $mul: { age: 2 } }
// );

// ? divide suyasha by 2
// db.scores.updateOne({ name: "Suyasha" }, { $mul: { age: 1 / 2 } });
// db.scores.find();

// ? rename
// db.scores.updateMany({}, { $rename: { scores: "marks" } });
// db.scores.find();

// ? min, max
// ? min=> if the value is more than specified value , it sets max value to that fiels
// ? max=> if the value is less than specified value , it sets max value to that fiels
// db.scores.updateMany({}, { $max: { age: 16 } });
// db.scores.find();

// ? $min => if field value is more than specified value, it sets min value to that field
// db.scores.updateMany(
//   {},
//   {
//     $min: {
//       age: 16,
//     },
//   }
// );

// ? $max => if field value is less than specified value, it sets max value to that field
// db.scores.updateMany(
//   {},
//   {
//     $max: {
//       age: 50,
//     },
//   }
// );

// db.scores.updateMany(
//   {},
//   {
//     $set: {
//       luckyThings: { number: 7, colour: "Green" },
//     },
//   }
// );

// db.scores.find();

// ? update the lucky number of Smarika to 8

// db.scores.updateOne(
//   { name: "Smarika" },
//   {
//     $set: {
//       "luckyThings.number": 8,
//     },
//   }
// );

// ? update the lucky number of Suyasha to blue
db.scores.updateOne(
  { name: "Suyasha" },
  {
    $set: {
      "luckyThings.colour": "Blue",
    },
  }
);
db.scores.find();
