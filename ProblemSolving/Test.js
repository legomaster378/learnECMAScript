// function print(n) {
//   for (let i = 0; i <= n; i++) {
//     for (let j = 0; j <= n; j++) {
//       // console.log("* ");
//       process.stdout.write("* ");
//     }
//     process.stdout.write("\n");
//   }
// }

// print(10);
function printATriangle(rows) {
  for (let i = 0; i < rows + 1; i++) {
    for (let j = 0; j < i; j++) {
      process.stdout.write("* ");
    }
    process.stdout.write("\n");
  }
}
printATriangle(7);