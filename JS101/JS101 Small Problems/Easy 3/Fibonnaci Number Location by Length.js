function findFibonacciIndexByLength(numberPlaces) {
  let fibonacciSeq = [1, 1];
  let newFibonacciElement = 0;
  let finalElementIndex = 0;
  for (index = 2; index.toString().length = numberPlaces; index++) {
    newFibonacciElement = fibonacciSeq[index - 2] + fibonacciSeq[index - 1];
    fibonacciSeq.push(newFibonacciElement);
    if (newFibonacciElement.toString().length === numberPlaces) {
      finalElementIndex = index + 1;
      break
    }
  }
  console.log(finalElementIndex);
}

findFibonacciIndexByLength(2);       // 7
findFibonacciIndexByLength(10);      // 45
findFibonacciIndexByLength(16);      // 74

//index.toString().length = numberPlaces