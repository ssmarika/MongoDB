use("kec-crud");

// ?comparison operator
// ? $eq, $ne, $gt, $gte, $lte, $in, $nin

// * $eq
// ? find movie whose name is "Glee"
// db.movies.find({ name: { $eq: "Glee" } }, { name: 1, _id: 0 });
// the second curly bracket signifies select, here only name is selected and id is not displayed

// equivalent movie
// db.movies.find({ name: "Glee" });

// * $gt
// ? find movie whose runtime is greater than 70
// db.movies.find({ runtime: { $gt: 70 } }, { name: 1, runtime: 1 });

// ? find movies whose rating is greater than 9
// db.movies.find(
//   { "rating.average": { $gt: 9 } },
//   { name: 1, _id: 0, averagerating: "$rating.average" }
// );
// the rating.average is to be "" to signify it
// to extract the data $ is used to signify that it is a variable data

// * $ne

// db.movies.find({ id: { $ne: 1 } });

db.movies.find({ id: { $not: { $eq: 1 } } }, { id: 1, name: 1 });
