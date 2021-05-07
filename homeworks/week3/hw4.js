function Palindrome(str) {
  let reverseStr = ''
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i]
  }
  return reverseStr === str ? 'True' : 'False'
}
console.log(Palindrome('aacb'))
