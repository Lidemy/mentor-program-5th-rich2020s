const request = require('request')
const process = require('process')

function main() {
  request(
    `https://restcountries.eu/rest/v2/name/${process.argv[2]}`,
    (err, response, body) => {
      if (err) {
        console.log('err:', err)
        return
      }
      let json
      try {
        json = JSON.parse(body)
      } catch (e) {
        console.log(e.message)
        return
      }
      if (json.status > 400) console.log('「找不到國家資訊」')
      else {
        for (const i of json) {
          console.log('============')
          console.log(`國家： ${i.name}`)
          console.log(`首都： ${i.capital}`)
          console.log(`貨幣： ${i.currencies[0].code}`)
          console.log(`國碼： ${i.callingCodes[0]}`)
        }
      }
    }
  )
}
main()
