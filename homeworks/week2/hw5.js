function join(arr, concatStr) {
  let ans = ''
  for (let i = 0; i < arr.length; i++){
  	ans += (i!== arr.length - 1 ? arr[i] + concatStr : arr[i])
  }
  return ans
}

function repeat(str, times) {
  let ans =''
  for (let i = 0; i < times; i++){
  	ans += str
  }
  return ans
}

console.log(join(["a","b","c"], '!'));
console.log(repeat('yoyo', 2));
