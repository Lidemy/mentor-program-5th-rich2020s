const db = require('../models')

const User = db.richw17_hw2_user
const userController = {
  login: (req, res) => {
    const { username, password } = req.body
    User.findOne({
      where: {
        username,
        password
      }
    }).then((results) => {
      /* eslint-disable */
      if (results == 0) {
        req.flash('messages', '查無使用者')
        res.redirect('/login')
      }
      req.session.user = username
      req.session.userId = results.id
      req.flash('messages', '登入成功！')
      res.redirect('/manage')
    }).catch((err) => {
      req.flash('messages', err.toString())
      res.redirect('/login')
    })
  }
}
module.exports = userController
