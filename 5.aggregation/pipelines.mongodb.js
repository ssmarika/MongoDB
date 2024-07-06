use("kec-crud");

// ? pipeline stage=> powerful query tool
// ? uses pipeline stage
// ? it is a read operation
// ? it is an alternative to find
// ? make no change to the database

// $match
// $project
// $sort
// $skip
// $limit
// $lookup
// $group

// db.movies.aggregate([{ $match: { name: "Glee" } }]);

// db.movies.aggregate([
//   { $match: { genres: "Action", "rating.average": { $gt: 9 } } },
//   { $project: { name: 1, genres: 1, rating: 1, _id: 0 } },
// ]);

// db.movies.find();

// ? find movies whose genres is crime or network country is "Unites states"
// db.movies.aggregate([
//   {
//     $match: {
//       $or: [{ genres: "Crime" }, { "network.country.name": "United States" }],
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       genres: 1,
//       networkCountry: "$network.country.name",
//       _id: 0,
//     },
//   },
// ]);

// ? find the movie whose genres includes both drama and comedy
// ? project "name" and "genres" field

// db.movies.aggregate([
//   { $match: { $and: [{ genres: "Drama" }, { genres: "Comedy" }] } },
//   { $project: { _id: 0, name: 1, genres: 1 } },
// ]);

// alternative

// db.movies.aggregate([
//   { $match: { genres: { $all: ["Drama", "Comedy"] } } },
//   { $project: { _id: 0, name: 1, genres: 1 } },
// ]);

// ? $sort
// arranges data in either ascending or descending order
// 1 => ascending sort
// -1 => descending sort

// db.movies.aggregate([
//   { $match: {} }, // just for code readability no need to actually write
//   { $sort: { id: -1, name: 1 } }, //this is compound sort
//   { $project: { id: 1, name: 1, _id: 0 } },
// ]);

// db.movies.insertOne({ id: 249, name: "Prison Break" });

// db.movies.aggregate([
//   { $match: {} },
//   { $sort: { name: -1 } },
//   { $project: { _id: 0, name: 1 } },
// ]);

// ?limit => number of documents to be returned
// db.movies.aggregate([
//   { $match: {} },
//   { $sort: { id: 1 } },
//   { $limit: 5 },
//   { $project: { _id: 0, name: 1, id: 1 } },
// ]);

// ? find movies whose rating is greater than 8
// ?and id is sorted in ascending order

// db.movies.aggregate([
//   { $match: { "rating.average": { $gt: 8 } } },
//   { $sort: { id: 1 } },
//   { $limit: 5 },
//   { $project: { _id: 0, id: 1, name: 1, rating: "$rating.average" } },
// ]);

// db.movies.insertOne({ id: 17, name: "Wednesday" });

// ? find top 5 best rated Crime movies

db.movies.aggregate([
  { $match: { genres: "Crime" } },
  { $sort: { "rating.average": -1 } },
  { $limit: 5 },
  { $project: { name: 1, genres: 1, rating: "$rating.average", _id: 0 } },
]);
