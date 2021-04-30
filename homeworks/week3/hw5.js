function lioj1004(input) {  // eslint-disable-line
  const n = Number(input[0])
  for (let i = 0; i < n; i++) {
    let arr = input[0].split(" ") // eslint-disable-line
    for (let j = 0; j < 2; j++) {
      arr[j] = BigInt(arr[j])
    }
    if (Number(arr[2]) === 1) {
      if (arr[0] > arr[1]) console.log('A')
      else if (arr[0] < arr[1]) console.log('B')
      else console.log('DRAW')
    } else if (Number(arr[2]) === -1) {
      if (arr[0] < arr[1]) console.log('A')
      else if (arr[0] > arr[1]) console.log('B')
      else console.log('DRAW')
    }
  }
}
