## 請說明雜湊跟加密的差別在哪裡，為什麼密碼要雜湊過後才存入資料庫
加密：加密會需要 key，會產生密文。解密也需要 key。密文解密後才是原本的內容。  
雜湊：內容經過雜湊後，不管內容的長度，輸出的長度是固定的。給予同樣的輸入就會有同樣的輸出。無法從輸出去反推原本的內容。雜湊函式有可能發生碰撞，就是兩個不同的輸入卻有同樣的輸出，但好的雜湊函式碰撞機率很低。

## `include`、`require`、`include_once`、`require_once` 的差別
`include` 跟 `include_once` 和 `require` 跟 `require_once` 的差別：  
差在 once，會檢查之前是否有引入過相同的檔案，如果有就不會再引入了。  
`include` 跟 `require` 的差別：  
如果發生錯誤， `include` 只會發出警告，繼續程式的執行。 `require` 則會中斷程式的執行。

## 請說明 SQL Injection 的攻擊原理以及防範方法
是在輸入的資料中夾帶 SQL 指令，而資料庫在處理時誤以為是正常的指令且執行，造成破壞或入侵。像是 `sql = SELECT * FROM database WHERE username = '$s' and password = '$s'` 這樣一行確認登入的指令，如果把 username 輸入 `' or 1=1#` 密碼隨便填都可以登入成功。
解決方法：使用資料庫提供的參數化查詢。以我們學習的 MySQL 是用 prepared statement。

##  請說明 XSS 的攻擊原理以及防範方法
XSS 是在網頁裡面注入一些惡意程式碼，當使用者載入這個網頁時，造成帳號密碼、或cookie 被盜。例如在部落格文章標題寫下<script>alert("XSS攻擊")</script> ，如果該部落沒有做好檢查，所有載入該文章標題頁面的使用者，都會跳出一個警告"XSS攻擊"。  
解決方法：讓載入頁面時，要讓程式知道這不是一段程式碼，而是把它當純文字處理。在 php 裡面可以使用 htmlspecialchars 這個函式，把文字進行跳脫，當作純文字處理。

## 請說明 CSRF 的攻擊原理以及防範方法
CSRF 是利用釣魚網站手法，同時利用瀏覽器前往相同域名時會帶上 cookie 的特性，讓使用者載入釣魚網頁時，偷偷幫使用者發送 request。由於瀏覽器會自動帶上 cookie。如果使用者已經登入，就可以利用使用者的權限來做壞壞的事情。  
最簡單是在 response header 的 set-cookie 後面加上 SameSite。意思是說只能在同個 domain 才能發送這個 cookie。