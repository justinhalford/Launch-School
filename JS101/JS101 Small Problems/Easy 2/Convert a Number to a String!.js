function integerToString(number) {
    const result = [];
  
    do {
      result.push(number % 10);
      number = Math.floor(number / 10);
    } while (number > 0);
  
    return result.reverse().join('');
}

integerToString(4321);      // "4321"
integerToString(0);         // "0"
integerToString(5000);      // "5000"
integerToString(1234567890);      // "1234567890"