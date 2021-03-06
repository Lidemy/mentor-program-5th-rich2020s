## 什麼是 DNS？Google 有提供的公開的 DNS，對 Google 的好處以及對一般大眾的好處是什麼？
DNS(Domain Name System)將域名和 IP 位址做相互對映的分散式資料庫。簡單講就是將域名轉換成 IP 位址的網路服務。
Google 提供的公開 DNS 讓 Google 可以了解哪些網站最受歡迎，知道現在的趨勢。從而更精準的投放廣告。對大眾來說，好處就是 Google 的 DNS 更快。讓使用者體驗更好。

## 什麼是資料庫的 lock？為什麼我們需要 lock？
lock 是一種保持資料庫隔離性的一種機制。當有多個使用者在寫入或讀取資料庫的時候，可以確保資料不會有不一致的狀況。
像是購物網站進行交易時，就需要先將交易項目的資料 lock，避免多名用戶同時下單造成超賣的狀況。

## NoSQL 跟 SQL 的差別在哪裡？
資料表要先設定架構。SQL 的資料結構會像 excel 表格那樣，以行列的關係展示。

* SQL 優點：有效率的讀取資料。資料操作的準確性和一致性高。可以將多個資料表進行關聯。

NoSQL 儲存的資料比較彈性，最常見是存入像 JSON 格式的字串。沒有欄位，全部都存進一個文件裡。可以用 Key-value 來讀取特定資料。

* NoSQL 優點：不需要事先定義資料的架構和資料間的關聯。之後想要新增欄位也不用去更改舊的資料。儲存資料的方式更多元，還有其他像是圖像資料庫。


## 資料庫的 ACID 是什麼？
Atomicity（原子性）：資料操作只有全部成功，或全部失敗。不會有只成功一半的狀況發生。
Consistency（一致性）：資料永遠符合資料庫架構的規範。
Isolation（隔離性）：多筆資料操作時，彼此不會互相干擾造成資料錯誤。
Durability（耐久性）：操作成功後，結果永久的保存在資料庫中。不會因為系統故障或重啟而丟失。