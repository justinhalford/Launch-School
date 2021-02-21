function asciiValue(string) {
  let asciiSum = 0;
  for (i = 0; i < string.length; i++) {
    asciiSum += string.charCodeAt(i);
  }
  console.log(asciiSum);
}

asciiValue('Launch School is a bountiful resource.')