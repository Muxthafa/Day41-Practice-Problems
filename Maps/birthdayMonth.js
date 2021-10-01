let prompt = require("prompt-sync")()

let dict = {};
let bdyMonth = new Map()
let months = ['jan','feb','march','april','may','june','july','aug','sep','oct','nov','dec'];
let years = ['1992','1993'];
for(let i =1;i<=50;i++){
    let yearIndex = Math.floor((Math.random()*2));
    let monthIndex = Math.floor((Math.random()*12));
    dict["person "+i] = months[monthIndex] + " "+ years[yearIndex];
    bdyMonth.set("person "+i,months[monthIndex] + " "+ years[yearIndex])
}

let month = prompt("Enter the month: ")

console.log("People born in "+month+" are");

bdyMonth.forEach((val,key,bdyMonth) => {
    let yearMonth = val.split(" ");
        if(yearMonth[0] == month)
            console.log(key+" born on "+ val)
})