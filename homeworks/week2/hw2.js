function capitalize(str) {
  let ans = str[0].toUpperCase() 
  ans += str.slice(1)
  return ans
}

console.log(capitalize('hello'));
