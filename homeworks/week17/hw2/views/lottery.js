const draw = document.querySelector('.button')
const redraw = document.querySelector('.returnButton')

redraw.addEventListener('click', (e) => {
  e.preventDefault()
  fetchDraw()
})
draw.addEventListener('click', (e) => {
  e.preventDefault()
  fetchDraw()
})
async function fetchDraw(e) {
  let data, json
  try {
    data = await fetch('http://localhost:5001/drawing')
  } catch (err) {
    console.log(err)
  }
  json = await data.json()
  if (json.length !== 0) {
    [json] = json
    console.log(json.pictureUrl)
  }

  const image = document.querySelector('.background')
  const main = document.querySelector('main')
  const prize = document.querySelector('.prize')
  const prizeContainer = document.querySelector('.prize__container h2')
  if (json.length === 0) {
    prizeContainer.innerText = '惜沒中獎，再試一次吧'
    image.style.background = 'black'
  } else {
    prizeContainer.innerText = `恭喜中了：${json.prizeName}
    ${json.desc}`
    /* eslint-disable */
    image.style.background = `url("${json.pictureUrl}") center/cover no-repeat`;
  }
  main.classList.add('hide')
  prize.classList.remove('hide')
}
