輸出結果為：
```
1
3
5
2
4
```
原因：setTimeout 是由 Web APIs 提供的功能，沒辦法直接從 JavaScript 上執行。所以 JavaScript 在執行到 setTimeout 時，會把 setTimeout 交給 Web APIs 處理。Web APIs 處理好 setTimeout 後，會把`setTimeout` 的第一個參數（也就是整個 function）放進 callback queue。當 stack 是空的時候，eventloop 才會把在 task queue 排隊的任務放進 task stack 裡面。JavaScript 這時才會運行這些任務。

// 更新 task queue 更名為 callback queue
// 更新 stack 更名為 task stack