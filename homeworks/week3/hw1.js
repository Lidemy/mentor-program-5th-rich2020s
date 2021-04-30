function manystar(n) {
  n = Number(n)
  for (let i = 0; i < n; i++) {
    let tmp = ''
    for (let j = 0; j <= i; j++) {
      tmp += '*'
    }
    console.log(tmp)
  }
}

module.exports = manystar
