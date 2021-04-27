``` js
function isValid(arr) {
  for(var i=0; i<arr.length; i++) {
    if (arr[i] <= 0) return 'invalid'
  }
  for(var i=2; i<arr.length; i++) {
    if (arr[i] !== arr[i-1] + arr[i-2]) return 'invalid'
  }
  return 'valid'
}

isValid([3, 5, 8, 13, 22, 35])
```

## 執行流程
1. 呼叫 function isValid，並傳入 [3, 5, 8, 13, 22, 35]
2. 執行第一行，執行 isValid 的內容，將 arr =  [3, 5, 8, 13, 22, 35]
1. 執行第二行，設置迴圈，計數器 i = 0，判斷 i 是否小於 arr.length，arr.length 為 6 。i < arr.length 為 true。繼續執行。
2. 執行第三行，判斷 arr[i] 是否小於等於 0 ，arr[i] = 3：否。
3. 執行第二行， i++ 後 i = 1，判斷 i 是否小於 arr.length：是。
4. 執行第三行，判斷 arr[i] 是否小於等於 0 ，arr[i] = 5：否。
5. 執行第二行， i++ 後 i = 2，判斷 i 是否小於 arr.length：是。
6. 執行第三行，判斷 arr[i] 是否小於等於 0 ，arr[i] = 8：否。
7. 執行第二行， i++ 後 i = 3，判斷 i 是否小於 arr.length：是。
8. 執行第三行，判斷 arr[i] 是否小於等於 0 ，arr[i] = 13：否。
9. 執行第二行， i++ 後 i = 4，判斷 i 是否小於 arr.length：是。
10. 執行第三行，判斷 arr[i] 是否小於等於 0 ，arr[i] = 22：否。
11. 執行第二行， i++ 後 i = 5，判斷 i 是否小於 arr.length：是。
12. 執行第三行，判斷 arr[i] 是否小於等於 0 ，arr[i] = 35：否。
13. 執行第二行， i++ 後 i = 6，判斷 i 是否小於 arr.length：否。離開迴圈。
14. 執行第五行，設置迴圈，計數器 i = 2，判斷 i 是否小於 arr.length ，是。
15. 執行第六行，判斷 arr[i] 是否不等於 arr[i - 1] + arr[i - 2]。arr[i] = 8，arr[i - 1] = 5，arr[i - 2] = 3。8 != 5 + 3，為 false。
16. 執行第五行， i++ 後 i = 3，判斷 i 是否小於 arr.length：是。
17. 執行第六行，判斷 arr[3] != arr[2] + arr[1] => 13 != 8 + 5。否。
18. 執行第五行，i++ 後 i = 4，判斷 i 是否小於 arr.length：是。
19. 執行第六行，判斷 arr[4] != arr[3] + arr[2] => 22 != 13 + 8。是。回傳 invalid。