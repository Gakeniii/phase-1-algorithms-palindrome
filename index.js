function isPalindrome(word) {
  // Write your algorithm here
  return word === word.split('').reverse().join('');

}

/* 
  Add your pseudocode here
*/
// 1.Reverse the string.
// 2.Compare the reversed string with the original string.
// 3.If they are the same, return true; otherwise, return false.


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
