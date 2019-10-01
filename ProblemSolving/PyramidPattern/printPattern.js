function printSomething(n) {
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      if (i + j >= n) process.stdout.write("* ");
      // if (i + j <= n) process.stdout.write("* ");
      // if (Math.abs(i - j) >= n / 2) process.stdout.write("* ");
      // if (Math.abs(i - j) <= n / 2) process.stdout.write("* ");
    }
    process.stdout.write("\n");
  }
}

printSomething(10);

function printATriangle(rows) {
  for (let i = 0; i <= rows; i++) {
    for (let j = 0; j < i; j++) {
      process.stdout.write("* ");
    }
    process.stdout.write("\n");
  }
}
printATriangle(7);
