function isPrime(n) {
  n = Number(n)
  if (n === 1) return 'Composite'
  for (let i = 2; i <= n; i++) {
    if (n % i === 0 && i !== n) return 'Composite'
  }
  return 'Prime'
}
isPrime(5)
