function isPalindrome(word) {
  const reversedWord = word.split("").reverse().join("");
  return word === reversedWord;
}

/* 
  Add your pseudocode here


  Pseudocode:
  1. Define a function called isPalindrome that takes in a word parameter.
  2. Create a variable called reversedWord and set it equal to the reverse of the word parameter.
  3. If the word parameter is equal to the reversedWord, return true.
  4. Otherwise, return false.
*/



/*
  Add written explanation of your solution here

   Written explanation:
  The isPalindrome function takes in a word parameter and checks if it's a palindrome.
  To check if a word is a palindrome, we reverse the order of its characters and then compare it with the original word.
  If the two are the same, then the word is a palindrome.
  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));
  console.log("=>", isPalindrome("racecar"));
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  console.log("=>", isPalindrome("ab"));
}

module.exports = isPalindrome;
