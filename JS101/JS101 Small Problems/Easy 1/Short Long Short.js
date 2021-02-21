function shortLongShort (string1 = 'abc', string2 = 'defg') {
  if (string1.length < string2.length) {
  console.log(`${string1}${string2}${string1}`);
  } else if (string1.length > string2.length){
    console.log(`${string2}${string1}${string2}`)
  }
}

shortLongShort('longlong', 'short');