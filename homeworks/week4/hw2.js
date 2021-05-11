const request = require('request')
const process = require('process')

const action = process.argv[2]
switch (action) {
  case 'list':
    printList()
    break
  case 'create':
    createBook()
    break
  case 'read':
    readBook()
    break
  case 'delete':
    deleteBook()
    break
  case 'update':
    updateBook()
    break
}

function printList() {
  request('https://lidemy-book-store.herokuapp.com/books?_limit=20',
    (err, response, body) => {
      if (err) {
        console.log('err', err)
        return
      }
      let json
      try {
        json = JSON.parse(body)
      } catch (e) {
        console.log(e.message)
        return
      }
      for (let i = 0; i < json.length; i++) {
        console.log(`${json[i].id} ${json[i].name}`)
      }
    }
  )
}
function createBook() {
  request.post(
    {
      url: 'https://lidemy-book-store.herokuapp.com/books',
      form: { name: process.argv[3] }
    },
    (err, response, body) => {
      if (err) {
        console.log(err)
        return
      }
      console.log(body)
    })
}
function readBook() {
  request(
      `https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
      (err, response, body) => {
        if (err) {
          console.log(err)
          return
        }
        console.log(body)
      }
  )
}
function deleteBook() {
  request.delete(
    `https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
    (err, response, body) => {
      if (err) {
        console.log(err)
        return
      }
      console.log('statusCode:', response && response.statusCode)
    }
  )
}
function updateBook() {
  request.patch(
    {
      url: `https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
      form: { name: process.argv[4] }
    },
    (err, response, body) => {
      if (err) {
        console.log(err)
        return
      }
      console.log(body)
    }
  )
}
