function crunch(str) {
  let strArr = str.split('');
  let crunchedArr = [str[0]];
  for (i = 1; i < strArr.length; i++) {
    if (strArr[i] !== str[i-1]){
      crunchedArr.push(strArr[i]);
    }
  }
  console.log(crunchedArr.join(''));
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""