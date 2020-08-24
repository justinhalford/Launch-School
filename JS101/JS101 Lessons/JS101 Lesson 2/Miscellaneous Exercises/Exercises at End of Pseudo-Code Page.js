/* SUM OF TWO NUMBERS
START
GET NUMBERS 1 and 2
ADD NUMBERS 1 and 2
PRINT SUM OF NUMBERS 1 and 2
END
*/
function sum(num1, num2) {
  console.log(num1 + num2);
}
sum(1,21);

/* CONCATENATE AN ARRAY OF STRINGS INTO A SINGLE STRING
START
GET ARRAY OF STRINGS
SET iterator to 0
GET string at element 0
SET concatenated string to a cummulative concatenation of strings, starting with string at 0th index
Once iteration is complete (exhaustive of valued indicies in array of strings), PRINT cummulative concatenation of strings (single string)
END
*/
function stringConcat(strings) {
  let concatString = '';
  strings.forEach(string => {
   concatString += string;
  })
  console.log(concatString)
  }
doge = ['muchwow', 'verycool', 'sweetasbrah'];
stringConcat(doge);

/* POPULATE A NEW ARRAY WITH EVERY OTHER ELEMENT OF AN ARRAY OF INTEGERS
START
GET ARRAY OF INTEGERS
SET iterator to 0
SET new array to []
If iterator is odd valued, SET the next value of the new array to the integer in the corresponding index position of the provided array
Once the entire array has been iterated through, PRINT the new array
END
*/
function everyOther(intArray) {
  let everyOtherArray = [];

  intArray.forEach(num => {
    if (intArray.indexOf(num)%2 !== 0) {
      everyOtherArray.push(num);
    }
  });
  console.log(everyOtherArray);
}

numbers = [111212,1,122121,1,12121212,1,12121212121,1,1212122,1,121212,1,121212,1,122112,1,11212,1,12121,1];
everyOther(numbers);

