function stringToSignedInteger(str) {
  let sign = '';
  let output = 0;
  sign = str.slice(0,1);
  switch (sign) {
    case "-":
      output = -1 * stringToInteger(str.slice(1, str.length));
      return output;
    case "+":
      output = stringToInteger(str.slice(1, str.length));
      return output;
    default:
      output = stringToInteger(str);
      return output;
  }
}

function stringToInteger(str) {
  const DIGITS = {
    0 : 0,
    1 : 1,
    2 : 2,
    3 : 3,
    4 : 4,
    5 : 5,
    6 : 6,
    7 : 7,
    8 : 8, 
    9 : 9,
  }

  let result = 0;
  let digitVal = 0;
  let stringArr = str.split("").forEach((el) => {
    digitVal = DIGITS[el];
    result = (result * 10) + digitVal;
  });
  return result;
}
console.log(stringToSignedInteger("4321")); // logs true
console.log(stringToSignedInteger("-570")); // logs true
console.log(stringToSignedInteger("+100")); // logs true