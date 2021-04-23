function capitalize(str) {
  let newstr =''
  for (let i = 0; i < str.length; i++){
  	newstr += i === 0 ? str[i].toUpperCase() : str[i]
  }
  return newstr
}

console.log(capitalize('hello'));
