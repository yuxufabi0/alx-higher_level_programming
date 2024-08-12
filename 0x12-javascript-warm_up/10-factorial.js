#!/usr/bin/node

const process = require('process');
const number = parseInt(process.argv[2]);

if (isNaN(number)) console.log(1);
else factorial(number);

function factorial (a) {
  if (a < 1) return;
  let temp = a;
  while (a > 1) {
    temp = temp * (a - 1);
    a--;
  }
  console.log(temp);
}
