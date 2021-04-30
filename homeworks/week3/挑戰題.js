/*
var readline = require('readline');
const { isArray } = require('util');

var lines = []
var rl = readline.createInterface({
  input: process.stdin
});

rl.on('line', function (line) {
  lines.push(line)
});

rl.on('close', function() {
  solve(lines)
})
*/

function solve(lines) { // eslint-disable-line
  const squre = lines[0].split(' ')
  const mist = []
  const h = squre[0]
  const w = squre[1]
  for (let i = 0; i < h; i++) {
    const line = lines[i + 1].split('')
    mist.push(line)
  }
  const q = [[0, 0]]
  mist[0][0] = 0
  while (q.length !== 0) {
    if (q[0][0] + 1 < h && mist[q[0][0] + 1][q[0][1]] === '.') {
      mist[q[0][0] + 1][q[0][1]] = mist[q[0][0]][q[0][1]] + 1
      q.push([q[0][0] + 1, q[0][1]])
    }
    if (q[0][1] + 1 < w && mist[q[0][0]][q[0][1] + 1] === '.') {
      mist[q[0][0]][q[0][1] + 1] = mist[q[0][0]][q[0][1]] + 1
      q.push([q[0][0], q[0][1] + 1])
    }
    if (q[0][0] - 1 >= 0 && mist[q[0][0] - 1][q[0][1]] === '.') {
      mist[q[0][0] - 1][q[0][1]] = mist[q[0][0]][q[0][1]] + 1
      q.push([q[0][0] - 1, q[0][1]])
    }
    if (q[0][1] - 1 >= 0 && mist[q[0][0]][q[0][1] - 1] === '.') {
      mist[q[0][0]][q[0][1] - 1] = mist[q[0][0]][q[0][1]] + 1
      q.push([q[0][0], q[0][1] - 1])
    }
    q.shift()
    if (mist[h - 1][w - 1] !== '.') {
      console.log(mist[h - 1][w - 1])
      return mist[h - 1][w - 1]
    }
  }
}
