use("kec-crud");

// ? evaluation operator
// ? $regex, $expr

//

db.movies.find({ name: { $regex: "top model", $options: "i" } });
// options signify it is not case sensitive

db.movies.find({ summary: { $regex: "dark comical", $options: "i" } });

// db.employee.insertMany([
//     { name: "Utsarga", income: 800, expense: 600 },
//     { name: "Smriti", income: 900, expense: 1100 },
//     { name: "Samrat", income: 1100, expense: 700 },
//   ]);

// *expr
// used when we work inside the field
// ? find employee whose expense is greater then income
db.employee.find({ $expr: { $gt: ["$expense", "$income"] } });

// ? find employee whose income is less than 850
// db.employee.find({ income: { $gt: 850 } });
