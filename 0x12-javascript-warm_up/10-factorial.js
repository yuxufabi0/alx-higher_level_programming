#!/usr/bin/node
const process = require('process');
const number = process.argv[2];

function factorial (number) {
  if (number < 0) {
    return (-1);
  }
  if (number === 0 || isNaN(number)) {
    return (1);
  }
  return (number * factorial(number - 1));
}

const facto = factorial(number);
console.log(facto);
