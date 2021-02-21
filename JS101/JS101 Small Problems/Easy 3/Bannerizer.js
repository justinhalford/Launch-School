function logInBox(str) {
  let border = `+-${'-'.repeat(str.length)}-+\n`;
  let emptyLine = `| ${' '.repeat(str.length)} |\n`;
  let textLine = `| ${str} |\n`;
  console.log(`${border}${emptyLine}${textLine}${emptyLine}${border}`);
}

logInBox("su·per·ca·li·fra·gil·is·tic·ex·pi·a·li·do·cious");