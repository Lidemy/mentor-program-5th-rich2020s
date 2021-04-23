function printFactor(n) {
	let ans =''
	for (let i = 0; i <= n ; i++){
		if (n % i === 0)
			console.log(i)
	}
  
}

printFactor(24);
