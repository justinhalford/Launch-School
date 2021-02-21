function isLeapYear(year) {
  if (year < 1752) {
    if (year % 4 === 0) {
      console.log(true);
    } else {
      console.log(false);
    }
  } else if (year >= 1752) {
    if (((year % 4) === 0) && (((year % 100) !== 0) || ((year % 400) === 0))) {
      console.log(true);
     } else {
      console.log(false);
     }
    }
}

isLeapYear(2020); 