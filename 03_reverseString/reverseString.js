const reverseString = function(inputString) {
//go through the string a character at a time, starting from the end, and add the letters to a new block variable
let tempString = '';
for (let i = inputString.length - 1; i >= 0; i--){
  tempString += inputString.charAt(i);
}
return tempString;
};

// Do not edit below this line
module.exports = reverseString;
