const sumAll = function(a, b) {
//check to make sure both arguments are numbers
//compare arguments to determine with one is bigger
//for loop starting at the smaller argument, ending at 1+bigger argument
//adding together each integer including and in between the arguments
//return total

  let total = 0;
  let big = b;
  let small = a;
  if (typeof a === "number" && typeof b === "number" && a > 0 && b > 0) {
    if (a > b) {
      big = a;
      small = b;
    }
    for (let i = small; i <= big; i++) {
      total += i;
    }
  } else {
    total = "ERROR";
  }

  return total
};

// Do not edit below this line
module.exports = sumAll;
