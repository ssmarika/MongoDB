use("kec-crud");

// * array operator
// ? $and
// ? $elemMatch
// ? $size

// ? find movies whose genres includes both "Drama" and "Comedy"
// if and is applied on the same array field
// we can use $all

// db.movies.find({ genres: { $all: ["Drama", "Comedy"] } });

// db.movies.find({ genres: ["Drama", "Comedy"] });
// this simply display the movies whose genres is particularly darma and comdey only

// ?find movies whose genre size is 3
db.movies.find({ genres: { $size: 3 } });
