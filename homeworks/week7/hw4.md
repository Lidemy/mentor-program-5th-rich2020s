## 什麼是 DOM？
全名為 Document Object Model。是由 Ｗ3C 制定給 HTML, XML, SVG 的一種程式介面。它會將 html 裡面每個元素轉變成一個節點 (node)，並以樹狀 （tree）結構呈現。這樣方便用程式對裡面的節點進行操作。常用 Javascript 來進行操作，但不屬於 Javascript 的一部份。

## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？

傳遞機制就是先捕獲，再冒泡。

```
<body>
 	<main>
 		<div></div>
 	</main>
 </body>
```
前面說到 DOM 是一個樹狀的結構。  
當事件觸發的時候，會從整個 DOM 的根元素開始傳送事件。一路把這個事件傳送到觸發事件的當事人元素。  
以上面的程式碼為範例，如果是 div 觸發了事件，事件就會從 document -> html -> body -> main -> div。這就是捕獲(Capture phase)。  
傳到當事人元素時，就是叫目標階段（target phase）。  
最後一個階段，冒泡階段。剛剛從 DOM 的根元素傳下來，現在要把事件傳回去。這就是冒泡階段（Bubbling phase）。
## 什麼是 event delegation，為什麼我們需要它？

事件代理。假如網頁上有很多按鈕，利用事件代理，只需要一個事件監聽器就可以監聽全部的按鈕，並根據不同按鈕的觸發做反應。這樣就不需要根據按鈕的數量設置事件監聽器了。
## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？

event.preventDefault 是防止預設行為。例如表單裡面的按鈕，預設行為是會將表單的資料送出。加上 event.preventDefault 後，就可以取消這個行為。這樣我們可以先確認表單內的資料無誤後，再傳送資料。  
event.stopPropagation 是停止事件在 DOM 裡面傳遞。加上 event.stopPropagation 後，任何事件到了這個節點後，就不會繼續傳遞，不管是捕獲階段或是冒泡階段。