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
  const arr = lines[0].split(' ')
  const n = Number(arr[0])
  const w = Number(arr[1])
  const weight = []
  const dp = []
  const item = []
  for (let i = 1; i < lines.length; i++) {
    item.push(lines[i].split(' '))
    item[i - 1][0] = Number(item[i - 1][0])
    item[i - 1][1] = Number(item[i - 1][1])
  }
  for (let i = 0; i <= w; i++) {
    weight.push(0)
  }
  for (let i = 0; i <= n; i++) {
    dp.push(weight.slice())
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= w; j++) {
      if (j - item[i - 1][0] >= 0) {
        if (dp[i - 1][j - item[i - 1][0]] + item[i - 1][1] > dp[i - 1][j]) {
          dp[i][j] = item[i - 1][1] + dp[i - 1][j - item[i - 1][0]]
        } else dp[i][j] = dp[i - 1][j]
      } else dp[i][j] = dp[i - 1][j]
    }
    item[i - 1][1] = 0
  }
  console.log(dp[n][w])
}
