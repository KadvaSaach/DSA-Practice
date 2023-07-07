// Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. If there are two or more words that are the same length, return the first word from the string with that length.
// Ignore punctuation and assume sen will not be empty.
// Words may also contain numbers, for example "Hello world123 567"

// Input: "fun&!! time"
// Output: time

// Input: "I love dogs"
// Output: love

function LongestWord(sen) {
  var arr = sen.split(" ");
  var longest = "";
  for (i = 0; i < arr.length; i++) {
    arr[i] = arr[i].replace(/[^0-9a-z]/gi, "");
    if (arr[i].length > longest.length) {
      longest = arr[i];
    }
  }
  // code goes here
  return longest;
}

// keep this function call here
const a = "fun&!! time";
const b = "I love dogs";
const c = "Hello world123 567";

res = LongestWord(a);
console.log(res);

res = LongestWord(b);
console.log(res);

res = LongestWord(c);
console.log(res);
