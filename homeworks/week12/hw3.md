## 請簡單解釋什麼是 Single Page Application
我想起來之前在做 week11 的時候，每個動作、功能、頁面都用一個檔案來表示。這個方法叫「Multi-page」。SPA 就跟這個相反。將所有資料都載入同一個頁面中。根據使用者的操作和反應，來給予對應的反應和資料。其中就利用 Javascript 來維持和伺服器之間的溝通，包含資料的更新和獲得。

## SPA 的優缺點為何
SPA 優點：
* 不需要換頁，增加使用者體驗。有如桌面應用程式般的網頁。
* 第一次載入頁面時，網站內容已經被載入了。大部份的資源不需要重新載入。減少換頁和重新渲染的時間。
* 相對給後端伺服器壓力比較小。

SPA 缺點：
* SEO 差。因為內容由 Javascript 動態生成，所以 `.html` 裡面會是空的。如果爬蟲不會跑 Javascript ，就看不到內容。
* 由於從頭到尾都在同個頁面，`url` 的改變要自訂狀態去偵測改變。
* 第一次載入頁面較耗時。如果只是想看一個頁面反而會比較慢。

## 這週這種後端負責提供只輸出資料的 API，前端一律都用 Ajax 串接的寫法，跟之前透過 PHP 直接輸出內容的留言板有什麼不同？
過去用 php 的時候，畫面都是由伺服器進行渲染。前端只負責把拿到的頁面顯示出來。現在則是後端單純負責儲存資料和回應請求的資料。前端負責發送請求，和渲染畫面。前後端分工合作，前端負責處理畫面與使用者的行動。後端單純儲存和發送資料，不用再幫頁面進行渲染，降低伺服器負擔。