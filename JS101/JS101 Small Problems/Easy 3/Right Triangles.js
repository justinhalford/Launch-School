function triangle(number) {
  for (i = 0; i <= number; i++) {
    console.log((`${' '.repeat(number - i)}${'*'.repeat(i)}`) + '\n')
  }
}

triangle(2);