function Palindrome(str) {
  let reverseStr = ''
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i]
  }
  if (reverseStr === str) return 'True'
  return 'False'
}
console.log(Palindrome('aacb'))
