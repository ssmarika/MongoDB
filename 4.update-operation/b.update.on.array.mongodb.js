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
// db.scores.updateOne(
//   { name: "Suyasha", "points.sub": "Science" },
//   { $set: { "points.$.sub": "Maths" } }
// );
// db.scores.find();

// ?pull item which has sub "Science" and marks less than 88 from Rajan's data
db.scores.updateOne(
  { name: "Rajan" },
  { $pull: { points: { sub: "Science" }, marks: { $lt: 88 } } }
);
db.scores.find();
