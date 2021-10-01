let prompt = require("prompt-sync")()
let primeFactors=new Array()

//returns true if it is a prime
function isPrime(number)
{
    if(number==1)return true
    for(let i=2;i<number;i++)
    {
        if(number%i==0)
            return false;
    }
    return true;
}
let number = prompt("Enter the number: ")   //prompts user to enter a number

for(let i=2;i<=number;i++)
{
    if(number%i==0 && isPrime(i))           
    {
        primeFactors.push(i)            //prime factors are pushed into the array
    }
}
console.log(primeFactors)