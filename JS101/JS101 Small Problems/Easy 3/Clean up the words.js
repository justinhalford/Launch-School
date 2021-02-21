function cleanUp(word) {
  let cleanWord = [ ];
  let spaceCount = ''
  word.split('').forEach((character) => {
    if ((character.charCodeAt() >= 65 && character.charCodeAt() <= 90) || ((character.charCodeAt() >= 97 && character.charCodeAt() <= 122))) {
      cleanWord.push(character);
      spaceCount = 0;
    } else if (spaceCount === 0) {
      cleanWord.push(' ');
      spaceCount = 1;
    }
  });
  console.log(cleanWord.join(''));
}

cleanUp("---what's my +*& line?");    // " what s my line "