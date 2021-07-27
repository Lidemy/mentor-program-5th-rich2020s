output:
undefined
5
6
20
1
10
100

模仿 JavaScript引擎
一開始，JavaScript 會先找宣告的變數初始化。所以初始化之後會大概長這樣：
```
globalEC:{
  vo: {
    a:undefined
    fn:function
  }
}
```
之後再照順序執行程式碼 a = 1。接著是 fn 被呼叫。進去 fn() 裡面後，跟上面一樣，先找宣告的變數並初始化。

```
fnEC:{
  AO: {
    a:undefined,
    fn2:function
  }
}
```
所以第一題答案就會是 undefined。
 下一行：a = 5
所以第二題答案: 5  
`a++` 這時候 `a = 6`  
`var a` 會忽略，因為已經有 a 了  
`fn2()` 開始運行。一樣先初始化：

```
fn2EC: {
  AO: {}
}
```
因為沒有宣告東西，所裡面是空的。
但是 fn2 裡面第一行就要印 a。由於 function 裡面沒有宣告 a ，所以 JavaScript 會往上找。會去看 fn 裡面，看到 fn 有 a = 6 ，就把它印出來。
第三題： 6 
`a = 20` 由於在上一層找到 a 了，所以 JavaScript 就把 a 變成 20。
`b = 100` JavaScript 會一直往上找，但都沒有找到 b。所以它就自己在 global 宣告 b。然後 b = 100。
fn2 結束了，接著是第 9 行的`console.log(a)` 。由於在 fn2 裡面把 a = 20 了，所以第四題印出來是 20。
fn 結束了，由於 fn 結束了。裡面的 AO 也隨之消逝。更重要的是，globalEC.VO 裡面本來就有 a = 1(來自第一行)。所以第 17 行，第五題的答案是 1。
下一行 a = 10。 globalEC.VO 把它的 a 改成 10。第 19 行再把 a 印出來。第六題答案就是 10。
最後一行，印出 b。在 fn2 裡面有 b = 100。但那時候沒有人的 AO 上有 b。所以 globalEC.VO 就新增了一個 b = 100。所以雖然 fn 和 fn2 已經不在了，還是印得出 b，因為是記在 global 裡面。最後一題答案是:100。
