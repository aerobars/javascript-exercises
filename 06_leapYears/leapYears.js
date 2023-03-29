const leapYears = function(year) {
  //check if year is divisible by 4
  //check if year is divisible by 100 and not divisible by 400, if true return false
  //return true if both checks are passed, else return false
  if (year % 4 == 0) {
    if (year % 100 == 0 && year % 400 != 0) {
      return false;
    }
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
