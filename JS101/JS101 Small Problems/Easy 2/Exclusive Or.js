function xor(arg1, arg2) {
  let trueArgCount = 0;
  if (arg1) {
    trueArgCount += 1;
  }
  if (arg2) {
    trueArgCount += 1;
  }
  if (trueArgCount === 1) {
    return true;
  } else {
    return false;
  }
}