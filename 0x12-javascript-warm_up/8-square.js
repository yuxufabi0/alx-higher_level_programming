#!/usr/bin/node
const process = require('process');
const number = parseInt(process.argv[2]);

if (isNaN(number)) console.log('Missing size');
else {
  let i = 0;
  while (i < number) {
    let j = 0;
    let x = '';
    while (j < number) {
      x += 'X';
      j++;
    }
    console.log(x);
    i++;
  }
}
