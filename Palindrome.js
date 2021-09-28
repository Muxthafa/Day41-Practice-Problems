
let reversed=0
const pal = (number) => {
    while(number != 0){
        reminder = number % 10; //takes the remainder
        reversed = (reversed * 10) + reminder; //creating the reversed number
        number= parseInt(number / 10); //creating new number
        console.log(number);
    }
}

pal(1991)
console.log(reversed);
if(reversed  == 1991)
    console.log("Palindrome");
else
    console.log("Not palindrome");