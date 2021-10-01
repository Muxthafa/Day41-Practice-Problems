let arr=new Array();
for(let i=0;i<10;i++){
    arr.push(Math.floor(100+Math.random()*900))     //stores three digit numbers
}

let secondMax = function (){ 
    let max = Math.max.apply(null, arr);
    arr.splice(arr.indexOf(max), 1);
    return Math.max.apply(null, arr); // returns the 2nd largest
};
let secondMin = function (){ 
    let min = Math.min.apply(null, arr);
    arr.splice(arr.indexOf(min), 1);
    return Math.min.apply(null, arr); // returns the second largest
};
console.log("Second largest element in an array is "+secondMax());
console.log("Second smallest element in an array is "+secondMin()); 