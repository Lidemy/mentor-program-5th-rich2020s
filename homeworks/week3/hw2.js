function solve(n1, n2) {
  for (let i = n1; i <= n2; i++) {
    if (isNarcissistic(i)) console.log(i)
  }
}
function isNarcissistic(n) {
  const str = n.toString()
  let sum = 0
  for (let i = 0; i < str.length; i++) {
    const num = Math.pow(Number(str[i]), str.length)
    sum += num
  }
  return sum === Number(n)
}
solve(5, 200)
