const db = require('../models')

const User = db.rich_w17_user

const userController = {
  login: (req, res) => {
    const { username, password } = req.body
    User.findOne({
      where: {
        username,
        password
      }
    }).then((user) => {
      if (!user) {
        req.flash('messages', '不正確的使用者名稱')
        res.redirect('/login')
        return
      }
      // console.log(username, user.id)
      req.session.user = username
      req.session.userId = user.id
      req.flash('messages', '成功登入！')
      res.redirect('/home')
    }).catch((err) => {
      req.flash('messages', '不正確的使用者名稱或密碼')
      res.redirect('back')
    })
  },
  logout: (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        req.flash('messages', '行動失敗，請重試一次')
        res.redirect('/home')
      }
    })
    res.redirect('/home')
  }
}

module.exports = userController
