use("kec-crud");

// ? Logical Operator
// ? $and, $or,  $not, $nor

// * $and
// ?find movies whose genre is "Action" and rating is greater than 7
// db.movies.find(
//   {
//     $and: [{ genres: "Action" }, { "rating.average": { $gt: 7 } }],
//   },
//   { name: 1, genres: 1 }
// );
// for array we do not need to use "". it simply checks if the data is available in the array

// * $or
// ? find movies whose genres is "Crime" or network country is "United states"

// db.movies.find(
//   {
//     $or: [{ genres: "Crime" }, { "network.country.name": "United States" }],
//   },
//   { name: 1 }
// );

// * $nor
// all applied condition should not match

// ? find movies whose rating is neither greater than 7 nor genres is "Drama"
db.movies.find(
  { $nor: [{ "rating.average": { $gt: 7 } }, { genres: "Drama" }] },
  { name: 1, genres: 1, rating: "$rating.average" }
);
