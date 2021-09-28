const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the number:", (answer) => {
  if (Number(answer) % 2 != 0) 
    console.log("Prime");
  else 
    console.log("Not prime");
  rl.close();
});
