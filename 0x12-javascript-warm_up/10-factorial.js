#!/usr/bin/node

const process = require('process');
const number = parseInt(process.argv[2]);

if (number < 0) console.log(-1);
else if (isNaN(number) || number === 0) console.log(1);
else factorial(number);

function factorial (a) {
  let temp = a;
  while (a > 1) {
    temp = temp * (a - 1);
    a--;
  }
  console.log(temp);
}
