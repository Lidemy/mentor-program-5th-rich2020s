const gameList = []
let gameIndex
let offset = 0

async function twitch() {
  try {
    const arr = await topGamesTest()
    const streams = await getLiveStreams(arr[0])
    gameIndex = 0
    displayStream(streams)
  } catch (err) {
    console.log('Error:', err)
  }
}
twitch()

function topGamesTest() {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()
    const gameName = document.querySelectorAll('.nav__links--games')
    const firstGame = document.querySelector('.content__title h2')
    request.addEventListener('load', () => {
      if (request.status >= 200 && request.status < 400) {
        const json = JSON.parse(request.responseText)
        for (let i = 0; i < 5; i++) {
          if (i === 0) firstGame.innerText = json.top[i].game.name
          gameName[i].innerText = json.top[i].game.name
          gameList.push(json.top[i].game.name)
        }
        resolve(gameList)
      } else {
        console.log(request.statusCode)
        reject(request.statusCode)
      }
    })
    request.open('GET', 'https://api.twitch.tv/kraken/games/top?limit=5')
    request.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json')
    request.setRequestHeader('Client-ID', '0tv1kk5m6dndqvi2vbywana4l5hpjs')
    request.send()
  })
}

function getLiveStreams(game) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()
    request.open('GET', `https://api.twitch.tv/kraken/streams/?game=${game}&limit=20&offset=${offset}`)
    request.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json')
    request.setRequestHeader('Client-ID', '0tv1kk5m6dndqvi2vbywana4l5hpjs')
    offset += 20
    request.onload = () => {
      if (request.status >= 200 && request.status < 400) {
        let json
        try {
          json = JSON.parse(request.responseText)
        } catch (err) {
          console.log('err:', err)
        }
        if (json.streams.length < 20) document.querySelector('.loadingBtn').remove()
        resolve(json)
      }
    }
    request.onerror = () => reject(request.statusCode)
    request.send()
  })
}

function displayStream(streams) {
  for (let i = 0; i < streams.streams.length; i++) {
    const container = document.createElement('div')
    container.innerHTML = `
      <a href="${streams.streams[i].channel.url}" class="stream__link" target="_blank">
        <div class="stream__preview">
          <img src="${streams.streams[i].preview.medium}"></img>
        </div>
        <div class="stream__info">
          <span class="stream__logo" style="background: url(${streams.streams[i].channel.logo}) center/cover"></span>
          <div>
            <h3 class="stream__status">${streams.streams[i].channel.status}</h3>
            <div class="stream__name">${streams.streams[i].channel.name}</div>
          </div>  
        </div>
      </a>`
    container.classList.add('stream')
    document.querySelector('.streams').appendChild(container)
  }
}

const gamesBtn = document.querySelector('.nav__links')
gamesBtn.addEventListener('click', (e) => {
  const links = document.querySelectorAll('.nav__links--games')
  for (let i = 0; i < 5; i++) {
    if (e.target === links[i]) {
      links[gameIndex].classList.remove('active')
      links[i].classList.add('active')
      gameIndex = i
      offset = 0
      getLiveStreams(gameList[i])
        .then((v) => {
          document.querySelector('.content__title h2').innerText = v.streams[0].game
          document.querySelector('.streams').innerHTML = ''
          displayStream(v)
        })
        .catch((v) => console.log(v))
      break
    }
  }
})

const loadingBtn = document.createElement('button')
loadingBtn.classList.add('loadingBtn')
loadingBtn.innerHTML = 'see more'
document.querySelector('body').appendChild(loadingBtn)
loadingBtn.addEventListener('click', (e) => {
  getLiveStreams(gameList[gameIndex])
    .then((json) => {
      displayStream(json)
    })
})
