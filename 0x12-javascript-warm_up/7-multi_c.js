#!/usr/bin/node
const process = require('process');
const number = parseInt(process.argv[2]);
if (isNaN(number)) console.log('Missing number of occurence');
else {
  let i = 0;
  while (i < number) {
    console.log('C is fun');
    i++;
  }
}
