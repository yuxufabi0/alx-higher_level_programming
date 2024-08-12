#!/usr/bin/node

const process = require('process');
const number = parseInt(process.argv[2]);

if (isNaN(number) || number < 1) console.log(1);
else factorial(number);

function factorial (a) {
  let temp = a;
  while (a > 1) {
    temp = temp * (a - 1);
    a--;
  }
  console.log(temp);
}
