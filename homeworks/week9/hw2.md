## 資料庫欄位型態 VARCHAR 跟 TEXT 的差別是什麼
TEXT的最大長度固定是 65535 個字元（英文），不能改變最大長度，會花 2-byte 紀錄這個 TEXT 裡面有多大。而 VARCHAR 的最大長度是可以設定的，上限一樣是65535 個字元。 VARCHAR 在 255 字元以下會花 1-byte 紀錄大小，255以上則跟 TEXT 一樣。  
VARCHAR 可以設定預設值（default），TEXT 不行。
TEXT 在 MySQL 不能當作索引，要事先設定。VARCHAR 可以當成索引。
所以 VARCHAR 的搜尋速度比 TEXT 快。

## Cookie 是什麼？在 HTTP 這一層要怎麼設定 Cookie，瀏覽器又是怎麼把 Cookie 帶去 Server 的？
Cookie 是網站伺服器為了辨別用戶或追蹤用戶的行動而儲存在用戶端的資料。通常是很小的檔案，最大 4KB，並且經過加密。主要目的有三種，
Session 管理、個人化、追蹤。
Sever 在回傳的 header 中有 Set-Cookie  <cookie-name>=<cookie-value> 就可以在瀏覽器中生成 cookie。
瀏覽器將 cookie 放在 header 裡面。Cookie: rich_cookie=0127

## 我們本週實作的會員系統，你能夠想到什麼潛在的問題嗎？
* 不能修改密碼
* 忘記帳號或密碼沒有辦法找回來
* 會員輸入的帳號密碼沒有檢查，ex: 如果我把帳號打成 <h1>hello</h1> ，那在顯示上會出現錯誤。
* 資料庫裡面存的應該是經過雜湊函數加密過的密碼，而非真正的密碼。

