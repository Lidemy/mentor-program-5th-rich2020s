## 什麼是 MVC？
Model-View-Controller 軟體設計模式，這套模式將程式要做的事情分工。讓工程師在開發和維護上更方便。
龐大的專案沒有這種分工模式，所有的程式碼都寫在一起，不管是 debug 或是擴充功能，都會很困難。
* Model：負責和資料庫有關的行動。
* View：負責顯示頁面的內容。
* Controller：負責控制流程。將 Model 拿到的資料經過處理交給 View 去渲染頁面。

## 請寫下這週部署的心得
heroku 真棒！部署起來真方便。架一些簡單的網頁很快。
這次作業中為了部署，就直接在這週的 hw1, hw2 上直接新開一個 git，並 push 上 heroku。這樣的做法會不會有什麼疑慮？感覺在 git 裡面再開 git 很奇怪。

## 寫 Node.js 的後端跟之前寫 PHP 差滿多的，有什麼心得嗎？
當時在寫 php 的時候，雖然我沒有比較的對象，但那時候就覺得哪裡怪怪的。總覺得開發起來很麻煩，非常不人性化、效率很差。我覺得工程師應該沒辦法容忍長時間在這種開發環境工作XD。謝謝前人發明新的模式，讓我們脫離苦海。
用 MVC 架構，可以讓一樣的功能不用重寫。而且出問題可以很快知道要檢查哪裡，debug 快，檔案管理也清楚。有點理解為什麼這週要被加進來課程了，如果只寫過 php 後端，會覺得後端不是人待的吧xD。
回頭看看 sequlize，其實也蠻好用的，學會後覺得不太難。但在之前我卡了 2 週，現在回想起來，也不知道為什麼卡那麼久耶哈哈哈。