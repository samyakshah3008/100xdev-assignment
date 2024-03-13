/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let updatedString = str
    .replace(/\s/g, "")
    .replace(/[^\w\s]|_/g, "")
    .toLowerCase();
  let sortedString = updatedString.split("").reverse().join("");
  if (sortedString === updatedString) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("Nan"));

module.exports = isPalindrome;
