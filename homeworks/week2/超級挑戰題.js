function add(a, b) {
  let num = a | b
  let adder = a & b
  if ((a & b) === 0) return num
  while (1) {
    if ((num & adder) === 0 || num === 0) return num | adder
    let tmp = num  // eslint-disable-line
    num = num ^ adder
    adder = adder & tmp
    adder = adder << 1
  }
}
console.log(add(1024, 8))
