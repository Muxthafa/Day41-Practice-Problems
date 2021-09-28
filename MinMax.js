
let arr = new Array()
let rand
for(let i=0;i<5;i++){
    rand = Math.ceil(Math.random()*1000)
    arr[i]=rand
}
let max = Math.max(arr[0],arr[1],arr[2],arr[3],arr[4])
console.log("ele max"+max);
console.log(arr);
