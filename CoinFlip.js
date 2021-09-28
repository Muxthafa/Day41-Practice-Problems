let coinFlip = (number) => {
    if(number  == 0)
        return "HEADS"
    else
        return "TAILS"
}

let flipResult = Math.floor(Math.random()*2)
console.log(flipResult);
console.log(coinFlip(flipResult))
