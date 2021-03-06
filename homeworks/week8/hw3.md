## 什麼是 Ajax？
是一套綜合性的瀏覽器端網路開發技術。在 Ajax 之前是由瀏覽器發送請求，在接受到回應後重新載入並渲染網頁。這樣的缺點是如果網頁只是改變一小部份，傳送的資料大部份都是一樣，浪費了頻寬，也加重伺服器的負擔。  
使用 Ajax 透過瀏覽器向伺服器要求僅需要的資訊。並用 JavaScript 來更新瀏覽器。實現非同步請求，不需要由瀏覽器等待回應，而是等接收到回應再利用 JavaScript 更新資料。

## 用 Ajax 與我們用表單送出資料的差別在哪？
表單送出資料是由瀏覽器送出請求，瀏覽器等待回應。在等待的過程中使用者無法操作瀏覽器，直到瀏覽器接收到回應。
Ajax 也是透過瀏覽器發送請求，瀏覽器接收到請求後會回傳給 JavaScript。瀏覽器不用等待回應，也不用重新載入頁面，使用者還是可以操作瀏覽器。JavaScript 會等接收到回應後再更新資料。
所以用 Ajax 可以完成非同步請求。簡單講就是買東西不用等排隊，等叫號叫到我再去拿，在這之前我可以做別的事。

## JSONP 是什麼？
因為同源政策，只要是不同網域都沒辦法直接發送請求。JSOPP 可以讓一個網頁從其他網域拿資料。繞過瀏覽器安全性限制的問題。因為同源政策不限制 script src 這個屬性。利用這個特性向伺服器發送要求，伺服器則回傳一個可以跑 JavaScript 的字串。經過轉換後跑這個函式就可以拿到要的資料了。

## 要如何存取跨網域的 API？
需要有遵守 CORS(Cross-Origin Resource Sharing) 的 header 才能發出跨網域的請求。CORS 還要求瀏覽器必須傳送 preflight 請求，得到伺服器許可後才開始傳送真正的請求。

## 為什麼我們在第四週時沒碰到跨網域的問題，這週卻碰到了？
因為第四週我們是由 node.js 發送請求，而這次是用 JavaScript 透過瀏覽器發送請求。中間多了一個瀏覽器。
