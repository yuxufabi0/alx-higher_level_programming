#!/usr/bin/node

const process = require('process');
const a = parseInt(process.argv[2]);
const b = parseInt(process.argv[3]);

if (process.argv.legth < 3) console.log('NaN');
else add(a, b);

function add (a, b) {
  console.log(a + b);
}
