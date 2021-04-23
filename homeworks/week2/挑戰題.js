function search(arr,n){
  let min = 0,max = arr.length - 1
  let mid = Math.floor((min + max) / 2)
  	
  while(mid <= max && mid >= min){
  	if(arr[mid] > n){
  		max = mid - 1
  	} else if (arr[mid] < n){
  		min = mid + 1
  	} else {
  		return mid
  	}
    mid = Math.floor((min + max) / 2)
  }
  return -1
}
console.log(search([1, 3, 10, 14, 39], 14))