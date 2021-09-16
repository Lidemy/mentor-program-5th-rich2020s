## 請列出 React 內建的所有 hook，並大概講解功能是什麼
* useState:回傳一個陣列，陣列第一個是 state 的初始值，第二個是更新 state 的函式。當 state 改變的時候，會重新渲染頁面。當初始值需要複雜計算時，可以這樣像下面這樣寫，這樣只會在第一次渲染時計算。

```
const [state, setState] = useState(() => {
  const initialState = someExpensiveComputation(props);
  return initialState;
});

```

* useEffect:參數傳入一個函式。會在渲染階段完成後才執行傳入的函式。第二個參數可以傳入陣列，當陣列元素改變的時候才會執行傳入的函式。傳入空陣列只會在第一次渲染完執行。
* useContext:接受一個由 React.createContext 回傳的值(object)，會回傳目前 context 的值。context 的值由上層距離最近的 `<MyContext.Provider> `的 value。這樣 `createContext` 的初始值感覺不是很重要，反正在 `Provider` 那邊有傳就好了。
* useReducer:好像是可以替代 redux 的東西？學過 redux 會不會比較好懂。
* useCallback: 第一個參數傳入函式，第二個參數傳入陣列。跟 useEffect 相似，陣列裡面的元素改變時回傳的函式也會改變。會記下傳入的函式，並將它回傳。通常加入不會影響程式運行，是優化的方法之一。
* useMemo:和 useCallBack 相似，但是記下的不是函式本身，而是函式的回傳值。如果是計算量龐大的函式，可以用 useMemo 把結果記下來，之後就不用再算。也是主要優化的方法。
* useRef:傳入的參數為初始值。回傳值的 .current 可以拿到現在的值。是個方便儲存和訪問變數的 hook。跟 useState 不一樣在於，數值改變的時候不會重新渲染。
* useImperativeHandle:可以讓 ref 能向父 component 暴露自定義 instance 值。應該與 forwardRef 一起使用。沒用過，照抄官網。
* useLayoutEffect:跟 useEffect 相似，會在 DOM 改變的時候同時觸發 useLayoutEffect。可以用來讀取 DOM 的輸出並同時重新渲染。在瀏覽器到 paint 階段之前，useLayoutEffect 內部會先同步更新DOM的內容。看起來是比 useEffect 還要早進行 update，但同時瀏覽器也要渲染，所以官網建議盡量使用 useEffect。
* useDebugValue: 可以在開發者工具中顯示自訂義 hook 的標籤。

## 請列出 class component 的所有 lifecycle 的 method，並大概解釋觸發的時機點
render：在 class component 中，唯一必須的方法。當它執行時，會檢查 this.props 和 this/state 的變化，並返回以下其中一個類型：
  * React 元素
  * 陣列或 fragments
  * Portals
  * 字串或數字
  * 布林值或 null
render 應為純函數，代表它不會去更改 state。合理，畢竟 render 本來就是當 state 變動時才會重新渲染，如果每次重新渲染時會更改 state，這樣會變無限迴圈。然後 render 不會直接和瀏覽器互動。要和瀏覽器互動可以用 componentDidMount 或其他 lifecycle 方法。

constructor：如果不需要初始化 state，也不用綁定方法，那就不需要再 react component 裡面使用 constructor。會在 mounted 前被呼叫。在 React.Component 的 subclass 使用構造函數時，應該先使用 super(props)，不然會有 undefined 的問題。

componentDidUpdate：會在更新後立即執行，首次渲染不會執行這個方法。

componentDidMount：這個方法會在 component 的輸出已經被渲染在 DOM 上後，才執行。

componentWillUnmount： 會在 component 被 unmounted 和 destroyed 之前執行。適合執行任何必要的清理動作，像是清除 timer、網路 request 等等。不要在這個方法中使用 setState，component 永遠不會重新渲染。

## 請問 class component 與 function component 的差別是什麼？
除了使用方法上的差別，參考[這篇](https://overreacted.io/zh-hans/how-are-function-components-different-from-classes/)，差別是：『 Function components capture the rendered values 』
在[這個](https://codesandbox.io/s/pjqnl16lm7)例子中，如果點擊 class 的 follow ，過 3 秒後彈出的訊息上的人名跟剛剛 follow 的人名不一定有關係，它顯示的人名會是依據現在我們在誰的頁面上。我可以在 Dan 的頁面上按 follow，然後切換到 Sophie 的頁面，這樣跳出來的就是 followed Sophie。  
上面這是 class component 的狀況。  
但換到 function component 上的話，就比較接近我們預期的效果，按下 follow 後，不管我們之後在誰的頁面上，訊息都會顯示我們當初 follow 的對象。
```
class ProfilePage extends React.Component {
  showMessage = () => {
    alert('Followed ' + this.props.user);
  };

  handleClick = () => {
    setTimeout(this.showMessage, 3000);
  };

  render() {
    return <button onClick={this.handleClick}>Follow</button>;
  }
}

```

會造成這個問題的原因在於，在 class component 中會在 3 秒後去讀取 this.props.user。但 this 的對象在這中間發生改變了，所以印出來結果就是改變後的結果。當初的數值並不會傳進去。function component 不會有這個問題，因為當初的數值已經傳進
 function 內了。只是等 3 秒後再執行。 class component 則是等 3 秒後再拿值跟執行。

## uncontrolled 跟 controlled component 差在哪邊？要用的時候通常都是如何使用？

只要是畫面會隨著資料而有所改變的，都建議使用 controlled component。uncontrolled 只適用於靜態的 component，不管外面的風風雨雨，始終如一。
