const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const res = rl.question('Enter the weekday number:', (ans) => {
switch(Number(ans)){
    case 0 : console.log("Sunday")
            break
    case 1 : console.log("Monday")
            break
    case 2 : console.log("Tuesday")
            break
    case 3 : console.log("Wednesday")
            break
    case 4 : console.log("Thursday")
            break
    case 5 : console.log("Friday")
            break
    case 6 : console.log("Saturday")
            break
}
  rl.close();
});