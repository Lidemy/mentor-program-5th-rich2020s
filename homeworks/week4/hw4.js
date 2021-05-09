const request = require('request')

const option = {
  url: 'https://api.twitch.tv/kraken/games/top',
  headers: {
    Accept: 'application/vnd.twitchtv.v5+json',
    'Client-ID': '0tv1kk5m6dndqvi2vbywana4l5hpjs'
  }
}
function callback(err, response, body) {
  const json = JSON.parse(body)
  for (const i of json.top) {
    console.log(i.viewers, i.game.name)
  }
}
request(option, callback)
