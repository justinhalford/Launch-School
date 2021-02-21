function century(year) {
  let cent = ((((year - (year % 100))) / 100) + 1);
  console.log(cent);
  let strCent = cent.toString();
  switch (strCent) {
    case '11': case '12': case '13':
      console.log(`${cent}th`);
      break;
    default:
      switch (strCent[strCent.length - 1]) {
        case '1':
          console.log(`${cent}st`);
          break;
        case '2':
          console.log(`${cent}nd`);
          break;
        case '3':
          console.log(`${cent}rd`);
          break;
        case '4': case '5': case '6': case '7': case '8': case '9': case '0':
          console.log(`${cent}th`);
          break;
        default:
          console.log("Help I'm broken!")
          break;
        }
  }
}


century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"


// switch (strCent[strCent.length - 1])