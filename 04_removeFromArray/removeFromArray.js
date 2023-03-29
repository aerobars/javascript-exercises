const removeFromArray = function() {

//remove any inputted values found in input array
//create block scope variable
//for loop to go through array values
//nested for loop to go through function arguments
//if any array values match argument values, remove it from array
//return updated array or block scope variable?
  const inputArray = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    for (let j = 0; j < inputArray.length; j++){
      if (inputArray[j] === arguments[i]) {
        inputArray.splice(j, 1)
      }
    }
  }
  return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
