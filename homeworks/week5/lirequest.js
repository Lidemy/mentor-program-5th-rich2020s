// const request = require('request')

// // request(
// //   {
// //   url:'https://lidemy-http-challenge.herokuapp.com/lv6?token={CHICKENCUTLET}',
// //   },
// //   (err, response, body) => {
// //     console.log(body)
// //   })

// // request.post(
// //   {
// //   "url":'https://lidemy-http-challenge.herokuapp.com/api/books',
// //   form:{
// //     "name":"《大腦喜歡這樣學》",
// //     "ISBN":9789863594475
// //   }
// //   },
// //   (err, response, body) => {
// //     const json = JSON.parse(body)
// //     console.log(json)
// //   })

// // request(
// //   header = {
// //   method:'DELETE',
// //   url:'https://lidemy-http-challenge.herokuapp.com/api/books/23',
// //   },
// //   (err, response, body) => {
// //     // const json = JSON.parse(body)
// //     console.log(body)
// //   })

// //au

// // const option = {
// //   url:'https://lidemy-http-challenge.herokuapp.com/api/v2/me',
// //   headers:{
// //     Authorization: Basic YWRtaW46YWRtaW4xMjM=
// //   }
// // }
// const url1 = encodeURI('https://lidemy-http-challenge.herokuapp.com/api/v2/sys_info')
// const option = {
//   url : 'https://lidemy-http-challenge.herokuapp.com/api/v2/sys_info',
//   'auth':{
//     'user':'admin',
//     'pass':'admin123'
//   },
//   headers: {
//     'User-Agent':'Mozilla/4.0 (compatible; U; MSIE 6.0; Windows NT 5.1)',
//     'X-Library-Number':20
//   }
// }

// function callback(err, res, body){
//   // const json = JSON.parse(body)
//   // for(let i of json){
//   //   console.log(i.name, i.author, i.ISBN)
//   // }
//   console.log(err, body)
// }
// request(option, callback)
