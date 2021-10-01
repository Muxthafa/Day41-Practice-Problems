let arr=new Array();
for(let i=0;i<10;i++){
    arr.push(Math.floor(100+Math.random()*900))     //stores three digit numbers
}

let secondMax = arr.sort()[arr.length - 2];         //gets the second largest in an array
let secondMin = arr.sort()[1];                      //gets the element at index 1(second smallest)

console.log(arr);
console.log("Second largest element in an array is "+secondMax);
console.log("Second smallest element in an array is "+secondMin); 