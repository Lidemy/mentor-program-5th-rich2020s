const request = require('request')
const process = require('process')

if (process.argv[2] === 'list') {
  request(
    'https://lidemy-book-store.herokuapp.com/books',
    (err, response, body) => {
      const json = JSON.parse(body)
      for (let i = 0; i < 20; i++) {
        console.log(`${json[i].id} ${json[i].name}`)
      }
    }
  )
}

if (process.argv[2] === 'create') {
  request.post(
    {
      url: 'https://lidemy-book-store.herokuapp.com/books',
      form: { name: process.argv[3] }
    },
    (err, response, body) => {
      console.log(err, body)
    })
}

if (process.argv[2] === 'read') {
  request(
      `https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
      (err, response, body) => {
        console.log(body)
      }
  )
}
if (process.argv[2] === 'delete') {
  request.delete(
    `https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
    (err, response, body) => {
      console.log('statusCode:', response && response.statusCode)
    }
  )
}
if (process.argv[2] === 'update') {
  request.patch(
    {
      url: `https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
      form: { name: process.argv[4] }
    },
    (err, response, body) => {
      console.log('statusCode:', response && response.statusCode)
    }
  )
}
