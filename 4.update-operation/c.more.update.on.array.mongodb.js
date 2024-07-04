use("kec-crud");

// ? $ operator
// $ = element which match the document
// it simply hold the target value , the value that actually helps to find the document is represented by $

// ? change the sub of Suyasha from Maths to Statistics
// db.scores.updateOne(
//   { name: "Suyasha", "points.sub": "Maths" },
//   { $set: { "points.$.sub": "Statistics" } }
// );

// db.scores.find();

// ? chnage the points of science to 95 in suyasha data
// db.scores.updateOne(
//   { name: "Suyasha", "points.sub": "Science" },
//   { $set: { "points.$.point": 95 } }
// );
// db.scores.find();

// ? update subject from c++ to mern and point to 69 from Smarika data
// db.scores.updateOne(
//   { name: "Smarika", "points.sub": "C++" },
//   { $set: { "points.$.sub": "MERN", "points.$.point": 69 } }
// );
// db.scores.find();

// ? update the points of all sub by 5
// ! $ []
// $ simply refers to one value but $[] is used when we need to update all the element inside the array
// db.scores.updateOne({ name: "Smarika" }, { $inc: { "points.$[].point": 5 } });
// db.scores.find();

// ? if the points are less than 80 update it to 85 for Suyashas Data
// db.scores.updateOne(
//   { name: "Suyasha" },
//   {
//     $set: {
//       "points.$[element].point": 75,
//     },
//   },
//   {
//     arrayFilters: [{ "element.point": { $lt: 70 } }],
//   }
// );

// db.scores.find();

// ? decrease each marks of Rajan by 10

// db.scores.updateOne({ name: "Rajan" }, { $inc: { "marks.$[]": -10 } });
// db.scores.find();

// ? set 57 marks to 77 to suyasha"s marks

// db.scores.updateOne(
//   { name: "Suyasha", marks: 57 },
//   { $set: { "marks.$": 77 } }
// );
// db.scores.find();

// ? decrease each marks which are less than 90 by 10 marks for "Smarika"

// db.scores.updateOne(
//   { name: "Smarika" },
//   { $inc: { "marks.$[element]": -10 } },
//   {
//     arrayFilters: [{ element: { $lt: 90 } }],
//   }
// );
// db.scores.find();
