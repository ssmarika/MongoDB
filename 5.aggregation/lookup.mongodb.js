use("kec-crud");
// ? lookup
// to query between collection
// lookup ko ans le data jaile as an array return garcha so tyo array ko first elemet lai target garna we use $first

// db.person.insertMany([
//   {
//     firstName: "Rohan",
//     lastName: "Bhandari",
//     address: "Sydney",
//   },
//   {
//     firstName: "Rohil",
//     lastName: "Khadka",
//     address: "Udayapur",
//   },
//   {
//     firstName: "Enish",
//     lastName: "Shrestha",
//     address: "Kathmandu",
//   },
// ]);

// db.person.find();

// db.vehicle.insertMany([
//   {
//     model: "X",
//     brand: "Tesla",
//     biultYear: 2021,
//     ownerId: ObjectId("668bb4736eff4e52ab1f697b"),
//   },
//   {
//     model: "Mustang",
//     brand: "Ford",
//     biultYear: 2023,
//     ownerId: ObjectId("668bb4736eff4e52ab1f697c"),
//   },
//   {
//     model: "Creta",
//     brand: "Hyundai",
//     biultYear: 2024,
//     ownerId: ObjectId("668bb4736eff4e52ab1f697d"),
//   },
// ]);

// db.vehicle.find();

// db.vehicle.aggregate([
//   { $match: { model: "Mustang" } },
//   {
//     $lookup: {
//       from: "person",
//       localField: "ownerId",
//       foreignField: "_id",
//       as: "ownerDetails",
//     },
//   },
//   {
//     $project: {
//       model: 1,
//       brand: 1,
//       ownerFirstName: { $first: "$ownerDetails.firstName" },
//       // we are trying to extract array ko 0th index ko object ko first name so we use $first
//       ownerLastName: { $first: "$ownerDetails.lastName" },
//     },
//   },
//   {
//     $project: {
//       mode: 1,
//       brand: 1,
//       ownerFullName: { $concat: ["$ownerFirstName", " ", "$ownerLastName"] },
//     },
//   },
// ]);

// db.person.aggregate([
//   { $match: { firstName: "Rohil" } },
//   {
//     $lookup: {
//       from: "vehicle",
//       localField: "_id",
//       foreignField: "ownerId",
//       as: "vehicleDetails",
//     },
//   },
//   {
//     $project: {
//       _id: 0,
//       firstName: 1,
//       lastName: 1,
//       vehicleModel: { $arrayElemAt: ["$vehicleDetails.model", 0] },
//       vehicleBrand: { $arrayElemAt: ["$vehicleDetails.brand", 0] },
//       //vehicleModel: { $first: "$vehicleDetails.model" },
//       //vehicleBrand: { $first: "$vehicleDetails.brand" },
//     },
//   },
//   {
//     $project: {
//       _id: 0,
//       Name: { $concat: ["$firstName", " ", "$lastName"] },
//       vehicle: { $concat: ["$vehicleBrand", " ", "$vehicleModel"] },
//     },
//   },
// ]);

// db.vehicle.insertOne({
//   model: "Y",
//   brand: "Tesla",
//   biultYear: 2020,
//   ownerId: ObjectId("668bb4736eff4e52ab1f697d"),
// });

// db.person.aggregate([
//   { $match: { firstName: "Rohan" } },
//   {
//     $lookup: {
//       from: "vehicle",
//       localField: "_id",
//       foreignField: "ownerId",
//       as: "vehicleData",
//     },
//   },
//   {
//     $project: {
//       firstName: 1,
//       lastName: 1,
//       // you may also use first and last in this case
//       vehicleModel1: { $arrayElemAt: ["$vehicleData.model", 0] },
//       vehicleBrand1: { $arrayElemAt: ["$vehicleData.brand", 0] },
//       vehicleModel2: { $arrayElemAt: ["$vehicleData.model", 1] },
//       vehicleBrand2: { $arrayElemAt: ["$vehicleData.brand", 1] },
//     },
//   },
//   {
//     $project: {
//       Name: { $concat: ["$firstName", " ", "$lastName"] },
//       vehicle1: { $concat: ["$vehicleBrand1", " ", "$vehicleModel1"] },
//       vehicle2: { $concat: ["$vehicleBrand2", " ", "$vehicleModel2"] },
//     },
//   },
// ]);

// ? find owner of Ford Mustang car

db.vehicle.aggregate([
  { $match: { model: "Mustang" } },
  {
    $lookup: {
      from: "person",
      localField: "ownerId",
      foreignField: "_id",
      as: "personDetail",
    },
  },
  {
    $project: {
      firstName: { $first: "$personDetail.firstName" },
      lastName: { $first: "$personDetail.lastName" },
      model: 1,
      brand: 1,
      _id: 0,
    },
  },
  {
    $project: {
      name: { $concat: ["$firstName", " ", "$lastName"] },
      model: 1,
      brand: 1,
    },
  },
]);
