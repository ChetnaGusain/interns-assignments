const readlineSync = require('readline-sync');

// check if the string is a palindrome
function isPalindrome(str) {
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();  // Remove non-alphanumeric characters and convert to lowercase
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}

const userInput = readlineSync.question('Enter a string: ');

if (isPalindrome(userInput)) {
    console.log(`The string '${userInput}' is a palindrome.`);
} else {
    console.log(`The string '${userInput}' is not a palindrome.`);
}
