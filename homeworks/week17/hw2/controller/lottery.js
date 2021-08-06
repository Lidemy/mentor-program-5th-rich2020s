const db = require('../models')

const Lottery = db.richw17_hw2_lottery
const lotteryController = {
  add: (req, res) => {
    const { prizeName, pictureUrl, desc, probability } = req.body
    Lottery.create({
      prizeName,
      pictureUrl,
      desc,
      probability,
      userId: req.session.userId
    })
      .then((results) => {
        res.redirect('/manage')
      }).catch((err) => {
        req.flash('messages', err.toString())
        res.redirect('/manage')
      })
  },
  draw: async function draw(req, res) {
    let results
    try {
      results = await Lottery.findAll({ where: { isActive: 0 } })
    } catch (err) {
      res.send(err)
      return
    }
    /* eslint-disable */
    if (results == 0) {
      res.send('沒有相符的資料')
      console.log('沒有相符的資料')
      return
    }
    let sum = 0
    let randomNum = Math.floor(Math.random() * 99) + 1;
    let arr = []
    console.log(randomNum)
    for (let i = 0; i < results.length; i++) {
      sum += results[i].probability
      if (sum >= randomNum) {
        arr.push(results[i])
      }
    }
    if (sum > 100) {
      res.send('機率設定錯誤，請洽管理員')
      return
    }
    console.log(arr)
    res.send(JSON.stringify(arr))
    return
  }
}
module.exports = lotteryController
