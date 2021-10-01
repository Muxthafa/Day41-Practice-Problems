repeatDigits=new Array()

//function returns reversed digit
function reverse(num)
{
    let rev = 0;
    while (num > 0) {
        rev = rev * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    return rev
}

for(let i=10;i<=100;i++)
{
    if(i==reverse(i))   //checks if digit is same when reversed
    {
        repeatDigits.push(i)    //pushes into the array
    }
}
console.log(repeatDigits)