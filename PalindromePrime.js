const isPrime = (n) => {
  for (i = 2; i <= n - 1; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
};

const isPalindrome = (number) => {
  const len = number.length;
  for (let i = 0; i < len / 2; i++) {
    if (number[i] !== number[len - 1 - i]) {
      return false;
    }
  }
  return true;
};
const a = process.argv[2];
if (isPrime(a)) 
    console.log(a + " is a prime");
else 
    console.log(a + " is a not a prime");

if (isPalindrome(a)) 
    console.log(a + " is a palindrome");
else 
    console.log(a + " is not a palindrome");
