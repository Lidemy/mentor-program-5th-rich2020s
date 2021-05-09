const rp = require('request-promise')
const process = require('process')

const option = {
  url: `https://api.twitch.tv/kraken/streams/?game=${process.argv[2]}&offset=0&limit=100`,
  headers: {
    Accept: 'application/vnd.twitchtv.v5+json',
    'Client-ID': '0tv1kk5m6dndqvi2vbywana4l5hpjs'
  }
}

const option2 = {
  url: `https://api.twitch.tv/kraken/streams/?game=${process.argv[2]}&offset=100&limit=100`,
  headers: {
    Accept: 'application/vnd.twitchtv.v5+json',
    'Client-ID': '0tv1kk5m6dndqvi2vbywana4l5hpjs'
  }
}

rp(option)
  .then((repos) => {
    const json = JSON.parse(repos)
    for (const i of json.streams) {
      console.log(i._id, i.channel.display_name, i.viewers)
    }
    return rp(option2)
  })
  .then((repos) => {
    const json = JSON.parse(repos)
    for (const i of json.streams) {
      console.log(i._id, i.channel.display_name, i.viewers)
    }
  })
  .catch((err) => console.log(err))
