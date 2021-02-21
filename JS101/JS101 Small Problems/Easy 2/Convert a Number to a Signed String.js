function signedIntegerToString(number) {
  let sign = Math.sign(number);
  let output = '';

  switch(sign) {
    case 1:
      output = '+' + integerToString(number);
      return output;
    case -1:
      output = '-' + integerToString(number);
      return output;
    case 0:
      output = '0';
      return output;
  }
}

function integerToString(number) {
  const result = [];

  do {
    result.push(number % 10);
    number = Math.floor(number / 10);
  } while (number > 0);

  return result.reverse().join('');
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123));
console.log(signedIntegerToString(0) === "0");