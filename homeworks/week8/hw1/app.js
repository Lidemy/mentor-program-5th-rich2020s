
const request = new XMLHttpRequest()

function main() {
  request.addEventListener('load', () => {
    if (request.status >= 200 && request.status < 400) {
      let prize
      try {
        prize = JSON.parse(request.responseText)
      } catch (err) {
        console.log('err:', err)
        return
      }
      const image = document.querySelector('.background')
      switch (prize.prize) {
        case 'FIRST':
          document.querySelector('.prize h2').innerText = '恭喜你中頭獎了！日本東京來回雙人遊！'
          document.querySelector('.prize').classList.add('show')
          document.querySelector('.content').classList.add('hide')
          image.classList.add('first-prize')
          break
        case 'SECOND':
          document.querySelector('.prize h2').innerText = '二獎！90 吋電視一台！'
          document.querySelector('.prize').classList.add('show')
          document.querySelector('.content').classList.add('hide')
          image.classList.add('second-prize')
          break
        case 'THIRD':
          document.querySelector('.prize h2').innerText = '恭喜你抽中三獎：知名 YouTuber 簽名握手會入場券一張，bang！'
          document.querySelector('.prize').classList.add('show')
          document.querySelector('.content').classList.add('hide')
          image.classList.add('first-prize')
          break
        case 'NONE':
          document.querySelector('.prize h2').innerText = '銘謝惠顧'
          document.querySelector('.prize h2').style.color = 'white'
          document.querySelector('.prize').classList.add('show')
          document.querySelector('.content').classList.add('hide')
          image.classList.add('none-prize')
          break
        default:
          alert('系統不穩定，請再試一次')
      }
    } else {
      alert('系統不穩定，請再試一次')
    }
    request.onerror = () => {
      console.log('系統不穩定，請再試一次')
    }
  })
}
main()

const button = document.querySelector('.button button')
button.addEventListener('click', (e) => {
  request.open('GET', 'https://dvwhnbka7d.execute-api.us-east-1.amazonaws.com/default/lottery')
  request.send()
})
const returnButton = document.querySelector('.returnButton')
returnButton.addEventListener('click', (e) => {
  window.location.reload(false)
})
