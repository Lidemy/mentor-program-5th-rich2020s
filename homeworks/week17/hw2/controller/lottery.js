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
      })
      .catch((err) => {
        console.log(err.toString())
        res.redirect('/manage')
      })
  },
  edit: async(req, res) => {
    let results
    const { id } = req.params
    try {
      results = await Lottery.findOne({
        where: {
          id
        }
      })
    } catch (err) {
      res.send(JSON.stringify(err))
      return
    }
    res.render('edit', { results })
  },
  draw: async(req, res) => {
    let results
    try {
      results = await Lottery.findAll({ where: { isActive: 0 } })
    } catch (err) {
      res.send(JSON.stringify(err))
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
    for (let i = 0; i < results.length; i++) {
      sum += results[i].probability
      if (sum >= randomNum && arr.length === 0) {
        arr.push(results[i])
      }
    }
    if (sum > 100) {
      res.send('機率設定錯誤，請洽管理員')
      return
    }
    res.send(JSON.stringify(arr))
    return
  },
  getAll: async function (req, res){
    let results 
    try {
    results = await Lottery.findAll()
    } catch (err) {
      res.send('資料庫錯誤')
      return
    }
    let str = req.path.substring(1)
    res.render(str, { results })
  },
  update: async function(req, res) {
    const id = req.params.id
    const { prizeName, pictureUrl, desc, probability } = req.body
    let results
    try {
      results = await Lottery.update({
        prizeName,
        pictureUrl,
        desc,
        probability,
        userId: req.session.userId
      },
      {
        where: {
          id
        }
      })
    } catch(err) {
      req.flash('messages', err.toString())
      res.redirect('/manage')
      return
    }
    req.flash('messages', '更新成功')
    res.redirect('../manage')
    return
  },
  delete: async function(req, res) {
    const id = req.params.id
    let results
    try {
      results = await Lottery.destroy({ 
        where: {
          id
        }
      })
    } catch(err) {
      req.flash('messages', err.toString())
      res.redirect('/manage')
      return
    }
    req.flash('messages', '刪除成功！')
    res.redirect('/manage')
    return
  }
}
module.exports = lotteryController
