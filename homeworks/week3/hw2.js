function solve(n1, n2) {
  for (let i = n1; i <= n2; i++) {
    if (Narcissistic(i)) console.log(i)
  }
}
function Narcissistic(n) {
  n = n.toString()
  let sum = 0
  for (let i = 0; i < n.length; i++) {
    const num = Math.pow(Number(n[i]), n.length)
    sum += num
  }
  if (sum === Number(n)) return true
  else return false
}
solve(5, 200)
