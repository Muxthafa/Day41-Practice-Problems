let dieRoll = new Map()
flag=true
let n=0
let rand
while(flag){
    rand = Math.ceil(Math.random()*6)
    if(dieRoll.has(rand)){
        dieRoll.set(rand,dieRoll.get(rand)+1)
    }else{
        dieRoll.set(rand,1)
    }
    n++
    dieRoll.forEach((val,key,dieRoll) => {
        if(val == 10){
            console.log("Die number "+key+" has reached "+val);
            flag=false
            return;
        }
    })
}

let minKey=1
let minValue=dieRoll.get(minKey)
dieRoll.forEach((value,key)=>{
  if(minValue>value) {
     minKey=key
     minValue=value}
});
console.log("Die number "+minKey+" reached minimum value of "+minValue)
console.log(dieRoll)