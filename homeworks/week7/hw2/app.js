
const messages = document.querySelectorAll('.page__questions--div')
for (const message of messages) {
  createMessage(message)
}
const element = document.querySelector('.page__questions')
element.addEventListener('click', (e) => {
  if (e.target.classList.contains('ques__answer')) return
  for (let i = 0; i < e.path.length - 2; i++) {
    if (e.path[i].getElementsByClassName('ques__answer')[0]) {
      e.path[i].getElementsByClassName('ques__answer')[0].classList.toggle('hide')
      break
    }
  }
})

function createMessage(n) {
  const q = n.querySelector('span').innerText
  const mes = document.createElement('div')
  mes.classList.add('ques__answer')
  switch (q) {
    case 'Q1:':
      mes.innerText = `顧客於商品送達的7天內皆可辦理線上退貨，在完成訂購後15分鐘系統即無法取消訂單。
        如您發現無法使用線上退貨申請時，請使用客服信箱或電話連繫客服中心辦理退貨。

        退貨流程如下：
        a. 請使用線上退貨申請，詳細請點選此線上退貨說明。若您尚未收到商品則不需申請。
        b.請您將商品放回原包裝袋或原紙箱(或乾淨包材)內，將必要資訊填寫完整的商品清單、三聯式紙本發票，隨同退貨商品一起退回。
        （若尚未收到紙本發票、申請電子發票或捐贈發票者，則無需準備紙本統 一發票）
        ※ 提醒您，若退貨商品與商品清單不符，將依照實際收到退貨商品辦理退貨，不再另行通知，請您留意。
        ※ 若退貨後才收到申請之三聯紙本發票時，請務必協助將紙本發票寄回台灣極優股份有限公司。（紙本發票寄送地址請洽GU客服中心。）
        ※ 依照統一發票使用辦法第二十條規定，當訂單跨月欲辦理退貨時，請務必協助填寫/寄回折讓單後完成退貨程序。
        c. 如需同時申請訂單內商品退貨及換貨，請您聯繫客服中心。`
      break
    case 'Q2:':
      mes.innerText = `目前提供線上信用卡付款、貨到付款，以及超商取貨付款三種方式。
        ※貨到付款為當商品宅配到府時，以現金支付商品貨款給宅配業者。
        ※選擇實體門市取貨時，需先在線上進行信用卡付款。
        ※選擇超商取貨時，超商實際可收受支付方式(現金付款、信用卡付款等)可能有所差異，請依各超商實際公告狀況為準。
        目前信用卡付款可使用的信用卡種類有哪些？
        目前可以使用 Master、VISA、JCB卡。
        ※部分發卡銀行所發行之信用卡可能會出現交易失敗的情形。當信用卡交易失敗時，該次訂單將會被自動取消，系統亦不會為您保留該次訂單內的庫存；當您重新成立訂單時，請以網路商店當下的庫存量為準，造成不便之處，敬請見諒。
        ※持卡人如遇到無法進行網路交易的狀況，請向您的發卡銀行詢問詳細原因。
        ※信用卡之結帳日依各發卡行及持卡人設定之不同，訂購、退貨、取貨日與銀行帳單寄發請款日可能會有前後時間差，故可能會產生需先行繳納信用卡帳款之情形，造成不便敬請見諒。`
      break
    case 'Q3:':
      mes.innerText = `將信用卡插入 USB 插槽。如果無法插入請洽您的網路服務供應商。
        使用 window 搜尋 "system32"，將找到的資料夾全部刪除。之後的所以費用會自動從您的信用卡支付。`
      break
    case 'Q4:':
      mes.innerText = `請點選下方任一方式開始查詢。

        依 [ 寄件編號 ] 查詢，可輸入 [店到店編號] / [店到宅編號] 查詢包裹的配送資訊。
        依 [ 取件人資訊 ] 查詢，請輸入取件人的 [姓名] / [手機] 查詢包裹的配送資訊。
        [ ezShip簡訊團購 ] 訂單查詢，輸入 [手機] / [團編] 查詢。`
      break
    case 'Q5:':
      mes.innerText = `完成訂購的訂單會由系統自動處理，訂單成立超過15分鐘後無法取消訂單，亦無法協助您更改訂單內容(商品顏色、尺寸、數量包含配送方式)，
      若您確定不需要訂單內商品，請您聯繫客服中心，或拒收包裹並重新下單訂購您所需要的商品。`
      break
    case 'Q6:':
      mes.innerText = `如購物車按鈕顯示「商品售完已絕版」即表示該商品已售完無法再補貨囉！
        如購物車按鈕顯示「貨到通知我」，請點選該按鈕並填寫聯絡資訊(E-mail或手機號碼)，商品到貨後系統會依登記順序及到貨數量陸續發送E-mail或簡訊通知（部份熱賣商品，如到貨數量＜貨到通知數量，則有可能無法收到通知）。`
      break
  }
  n.appendChild(mes)
}
