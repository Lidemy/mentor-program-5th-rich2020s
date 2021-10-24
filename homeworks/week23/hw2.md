## 為什麼我們需要 Redux？
Redux 幫助我們管理 global state。 不是所以網頁都需要 Redux，使用 Redux 不會讓程式更快程式碼更短。Redux 是為了管理複雜狀態而出現的管理工具。當初是 Facebook 內部開發出來的工具，以應付 Facebook 網頁上複雜的狀態。如果我們只想寫簡單的網頁，那反而不需要 Redux。官網上的 FAQ 也回答了何時會需要 Redux 這個問題：
> 當你需要 flux 的時候，你會知道的。  
> 不要使用 Redux 直到你發現只使用原生 React 會出現問題。

## Redux 是什麼？可以簡介一下 Redux 的各個元件跟資料流嗎？
Redux 是一套狀態管理工具，任何需要管理狀態的地方都可以使用。除了 React 之外，也可以和其他框架一起使用。
![image](https://redux.js.org/assets/images/ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif)  
這個圖片大致展示了 Redux 整體的架構。  
Store：Redux 是狀態管理工具，而 Store 就是存著狀態的地方。State 是 Store 的其中一部份，因爲 Store 還會存著其他的狀態，我們通常只要其中的一部份資料。  
UI：使用者看到的畫面。Redux 常常和 React 一起使用，React 就是這裡的 UI。Redux 也可以和其他 UI 使用。  
Dispatch：當使用者操作觸發 event handler，會 dispatch 一個 action 去改變狀態。改變狀態只有這個方法。  
Action：一個 Javascript 物件，裡面有 type 這個屬性。主要是描述事件的內容。  
Reducer：接收 state 和 action 的函式，如果有必要就會更新並回傳新的 state。  

## 該怎麼把 React 跟 Redux 串起來？
官方有提供 React-Redux 這個工具，讓開發者可以將 React 和 Redux 一起使用。  
在實作上有兩種方式可以把 React 和 Redux 串起來。  
第一種是用 hooks。在 React component 裡面使用 hooks 來操作或拿到 state。  
第二種是用 connect 把 state 和 action 傳進去給 component 使用。
 