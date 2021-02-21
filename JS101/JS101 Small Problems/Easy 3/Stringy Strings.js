function stringy(number = 5) {
  let binaryString = '';
  for (i = 1; i <= number; i++) {
    i % 2 === 0 ? binaryString += '0' : binaryString += '1';
    }
    console.log(binaryString);
}

/*
function stringy(number = 5) {
  let binaryArray = [ ];
  for (i = 1; i <= number; i++) {
    i % 2 === 0 ? binaryArray += "0" : binaryArray += "1";
    }
    console.log(binaryArray);
}
*/

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"

/* counter % 2 === 0 ? pseudoBinary += "0" : pseudoBinary += "1";
}

if(i % 2 !== 0) {
  binaryArray.push(1);
} else if (i % 2 === 0) {
  binaryArray.push(0);
}
*/