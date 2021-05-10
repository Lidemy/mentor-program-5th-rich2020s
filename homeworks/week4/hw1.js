const request = require('request')

function main() {
  request('https://lidemy-book-store.herokuapp.com/books?_limit=10',
    (err, response, body) => {
      if (err) {
        console.log('err', err)
        return
      }
      let printList
      try {
        printList = JSON.parse(body)
      } catch (e) {
        console.log('err:', e)
        return
      }
      for (let i = 0; i < printList.length; i++) {
        console.log(`${printList[i].id} ${printList[i].name}`)
      }
    }
  )
}
main()
