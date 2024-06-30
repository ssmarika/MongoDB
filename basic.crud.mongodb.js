use("kec-crud");

//? to insert data
// insertOne
// insertMany

// db.student.insertOne({
//   name: "Smarika",
//   address: "Patan",
// });

// db.student.insertOne({
//   name: "Ram",
//   address: "Lagankhel",
// });

// db.student.insertMany([
//   {
//     name: "Mohan",
//     address: "Hattiban",
//   },
//   {
//     name: "Sam",
//     address: "Lagan",
//   },
// ]);

// db.student.insertOne({
//   name: "Tom",
//   address: "Lagankhel",
// });

// ? read operation
// findOne
// find

// db.student.find();
// This is equivalent to db.student.find({});

// db.student.find({ address: "Patan" });

// db.student.findOne({ name: "Sam" });

// db.student.findOne({ address: "Lagan" });
// shows the one that appears first

// db.student.find({ _id: ObjectId("667e98391c3f32234c4c2467") });

// ? delete=>remove data
// deleteOne
// deleteMany

// db.student.deleteOne({ address: "Hattiban" });
// deletes the document that appears first

// db.student.deleteMany({ address: "Lagan" });

// db.student.find();

// ? update => to change the field data
// updateOne
// updateMany

// db.student.updateOne(
//   {
//     address: "Lagankhel",
//   },
//   {
//     $set: { name: "Mohan" },
//   }
// );

// db.student.updateMany({address})
// db.student.find();

// db.student.insertOne({
//   name: "Tom",
//   address: "Lagankhel",
// });

//db.student.find();

// db.student.insertOne({
//   name: "Sam",
//   address: "Lagankhel",
// });

// db.student.find();

// db.student.updateMany(
//   { address: "Lagankhel" },
//   { $set: { address: "Nakhipot" } }
// );

// db.student.updateOne(
//   { name: "Ram" },
//   { $set: { address: "Hattiban" } },
//   { upsert: true }
// );
// if data is found it is updated if not it is inserted
// when upsert true

db.student.find();
