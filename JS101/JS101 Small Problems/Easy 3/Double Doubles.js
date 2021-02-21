function twice(number) {
  let numStr = number.toString();
  if (numStr.length % 2 === 0 && numStr.length !== 0) {
    if (numStr.slice(0,(numStr.length/2)) === (numStr.slice((numStr.length/2) , numStr.length))) {
      console.log(number)
    } else {
      console.log(Number(String(number).repeat(2)));
    }
  }
  if (numStr.length % 2 !== 0 || numStr.length === 0) {
    console.log(Number(String(number).repeat(2)));
  } 
}

twice(103);
twice(331331);
twice(101);
twice(3)