const convertToCelsius = function(F) {
  //use Math.toRound(number * 10) / 10 to get one decimal
  //(x − 32) × 5/9 °C
  return Math.round(((F - 32) * 5/9) * 10) / 10;
};

const convertToFahrenheit = function(C) {
  //(x × 9/5 + 32) °F
  return Math.round((C * 9/5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
