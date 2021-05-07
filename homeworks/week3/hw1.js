// var readline = require('readline');
// const { isArray } = require('util');

// var lines = []
// var rl = readline.createInterface({
//   input: process.stdin
// });

// rl.on('line', function (line) {
//   lines.push(line)
// });

// rl.on('close', function() {
//   solve(lines)
// })

function solve(lines) {  // eslint-disable-line
  const n = Number(lines[0])
  printStar(n)
}

function printStar(n) {
  let tmp = ''
  for (let j = 0; j < n; j++) {
    tmp += '*'
    console.log(tmp)
  }
}
