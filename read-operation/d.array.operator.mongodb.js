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
// db.movies.find({ genres: { $size: 3 } });
// you cannot provide range to size

// db.scores.insertMany([
//     {
//       name: "Subham",
//       scores: [82, 85, 88],
//       points: [
//         {
//           sub: "Social",
//           point: 82,
//         },
//         {
//           sub: "Science",
//           point: 65,
//         },
//       ],
//     },
//     {
//       name: "Suyasha",
//       scores: [75, 88, 89],
//       points: [
//         {
//           sub: "Social",
//           point: 75,
//         },
//         {
//           sub: "Science",
//           point: 84,
//         },
//       ],
//     },

//     {
//       name: "Smarika",
//       scores: [42, 65, 88],
//       points: [
//         {
//           sub: "Social",
//           point: 67,
//         },
//         {
//           sub: "Science",
//           point: 89,
//         },
//       ],
//     },
//   ]);

//db.scores.find();
// ! db.scores.find({"points.sub":"Social", "points.point":{$gt:80}})
// give a general output the only required answer is shubham but we obtain all the values
// to avoid such condition we use elemMatch

// db.scores.find({
//   points: { $elemMatch: { sub: "Social", point: { $gt: 80 } } },
// });

// ? find students whose score is greater than 80 and less than 85

// ?db.scores.find({ scores: { $elemMatch: { $gt: 80, $lt: 85 } } });
// atleast one element that completely matches the entire condition completely
// in this example suvam's score 82 matches the entire condition completely
// and could be used but using and 1st condition yeuta le ra 2nd contion arko le garcha so in this case we use elemMAtch
// when we use elenMatch both the condition is to be satisfied by addone element

// db.employee.insertMany([
//     { name: "Utsarga", income: 800, expense: 600 },
//     { name: "Smriti", income: 900, expense: 1100 },
//     { name: "Samrat", income: 1100, expense: 700 },
//   ]);

// ? find employee whose expense is greater then income

// db.employee.find({ $elemMatch: { expense: { $gt: "$income" } } });

// ? find employee whose income is less than 850
db.employee.find({ income: { $gt: 850 } });
