/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const vowelArray = ["a", "e", "i", "o", "u"];
  let vowelCount = 0;
  const updatedLowercaseString = str.toLowerCase();

  const splitStringToArray = updatedLowercaseString.split("");

  for (let i = 0; i < splitStringToArray.length; i++) {
    if (vowelArray.includes(splitStringToArray[i])) {
      vowelCount += 1;
    }
  }
  return vowelCount;
}

console.log(countVowels("H"));

module.exports = countVowels;
