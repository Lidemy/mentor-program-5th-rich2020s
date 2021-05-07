function isPrime(n) {
  const num = Number(n)
  if (num === 1) return 'Composite'
  for (let i = 2; i <= num; i++) {
    if (num % i === 0 && i < n) return 'Composite'
  }
  return 'Prime'
}
console.log(isPrime(5))
