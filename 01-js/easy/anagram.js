/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // remove whitespaces and convert to lowercase
  // count number of characters for both str1 and str2
  // convert the strings to arrays, sort them, and return back to string

  str1 = str1.replace(/\s/g, "").toLowerCase();
  str2 = str2.replace(/\s/g, "").toLowerCase();

  if (str1.length !== str2.length) {
    return false;
  }

  const sortedStr1 = str1.split("").sort().join("");
  const sortedStr2 = str2.split("").sort().join("");

  return sortedStr1 === sortedStr2;
}

isAnagram("debit card%", "%bad credit");

module.exports = isAnagram;
