function multiply(a, b) {
  if (a === '0' || b ==='0') return '0'

  let line = [],total = []  //先把乘出來用的數字用陣列存起來，total 來裝很多行 line  

  for(let i = a.length - 1, k = 0; i >= 0; i--,k++){
  	line = []
  	for(l = k;l > 0; l--){  
  			line.push(0)// 前面補零
  		}
  	for (let j = b.length - 1; j >= 0; j--){	
  		line.push(a[i] * b[j]) 		//取a,b各一個數進行乘法，存進 line
  	}
  	total.push(line)					//再存進total
  }
  return add(total)
}

function add(arr){
	let container = []
	let tmp = 0

	let count = arr[arr.length - 1].length // 計算最長的元素有多長
	for (let i = 0; i < arr.length; i++){ 
		for (let j = count - arr[i].length; j > 0; j--){
			arr[i].push(0)			// 後面補0，讓所有元素一樣長，後面運算更方便
		}
	}

	for(let i = 0; i < count; i++){
		tmp = 0
		for (let j = 0; j < arr.length; j++){
			tmp += arr[j][i]		//像直式乘法那樣，把每一行同位數的加起來
		}
		container.push(tmp)			//存進 container
	}

	tmp = 0
	let ans = []
	for (let i = 0 ; i < container.length; i++){
		container[i] = tmp + container[i]			//處理進位的問題，從個位數開始。tmp 為前一位數的進位。
		ans.push(container[i] % 10)					//存進 ans
		tmp = Math.floor(container[i] / 10)			//將進位的數字存進 tmp
		if (i === container.length - 1 && tmp !== 0)ans.push(tmp) //跑完container但tmp不是 0，代表要進位
	}

/*  下面這段在刪除數字前面的 0 ，如輸入是 05,03 會變成 015。這段程式把前面的 0 給刪掉，變成 15。*/
	let zeroCounter = NaN
	for (let i = ans.length - 1; i >= 0; i--){
		if (ans[i] !== 0)break
		else zeroCounter = i
	}
	if (zeroCounter !== NaN) ans.splice(zeroCounter,ans.length - zeroCounter)

/* 將數字陣列轉換成字串  */
	let ansStr =''
	for (let i = ans.length - 1 ; i >= 0; i--){
		ansStr += ans[i]
	}
	return ansStr
}

console.log(multiply('100','010'))