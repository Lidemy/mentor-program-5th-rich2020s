output:
2
2
undefined

先列出宣告的 `obj2` `hello` 裡面的東西
```
obj2 = {
  value: 2,
  hello: function() {
    console.log(this.value)
  }
}

hello = function() {
  console.log(this.value)
}
```
第一題 `obj.inner.hello()`所以可以看成 `obj.inner.hello.call(obj.inner)`
那 `hello` 裡面的 `this` 就等於 `obj.inner`
所以會印出 `obj.inner.value` 那就是 2。

第二題呼叫 `obj2.hello()` 也可以看成 `obj2.hello.call(obj2)` 
變成 `console.log(obj2.value)`  對照上面的 obj2 的樣子，所以也印出 2。

第三題 `hello()` 也可以看成 `hello.call(undefined)`。但也可以說 this 是用在物件上，所以 function 裡使用 this 就會是預設值。根據 runtime 和有沒有使用 'use strict' 決定預設值。沒有 'use strict' 下在 Node.js 上的預設值是 global 物件;瀏覽器下則是 window 物件。有 'use strict' 的話就都是 undefined。
雖然這裡沒有用 'use strict'，但 global 裡面沒有 value。所以印出來還是 undefined。