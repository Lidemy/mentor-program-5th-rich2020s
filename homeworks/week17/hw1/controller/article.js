const db = require('../models')

const Article = db.rich_w17_article
const User = db.rich_w17_user

const articleController = {
  add: (req, res) => {
    const { title, content } = req.body
    Article.create({
      title,
      content,
      richUserId: req.session.userId
    }).then((results) => {
      res.redirect('/home')
    }).catch((err) => {
      req.flash('messages', '發生錯誤')
      res.redirect('back')
    })
  },
  get: (req, res) => {
    Article.findAll({
      limit: 5,
      where: {
        isDelete: false
      },
      order: [
        ['id', 'DESC']
      ],
      include: [{
        model: User,
        as: 'userId'
      }]
    }).then((results) => {
      res.render('home', { results })
    }).catch((err) => {
      req.flash('messages', '發生錯誤')
      res.redirect('/home')
    })
  },
  getAll: (req, res) => {
    Article.findAll({
      attributes: ['title', 'id'],
      where: {
        isDelete: false
      },
      order: [
        ['id', 'DESC']
      ]
    }).then((results) => {
      console.log(results)
      res.render('allpost', { results })
    }).catch((err) => {
      req.flash('messages', '發生錯誤')
      res.redirect('/login')
    })
  },
  getMyarticle: (req, res) => {
    Article.findAll({
      where: {
        richUserId: req.session.userId,
        isDelete: false
      },
      order: [
        ['id', 'DESC']
      ],
      include: [{
        model: User,
        as: 'userId'
      }]
    }).then((results) => {
      res.render('manage', { results })
    }).catch((err) => {
      req.flash('messages', '發生錯誤')
      res.redirect('/home')
    })
  },
  getArtcileById: (req, res) => {
    const { id } = req.params
    Article.findOne({
      where: {
        id,
        isDelete: false
      },
      include: [{
        model: User,
        as: 'userId'
      }]
    })
      .then((results) => {
        res.render('post', { results })
      }).catch((err) => {
        req.flash('messages', '發生錯誤')
        res.redirect('back')
      })
  },
  update: (req, res) => {
    const { id } = req.params
    Article.findOne({
      where: {
        id
      },
      include: [{
        model: User,
        as: 'userId'
      }]
    })
      .then((results) => {
        /* eslint-disable */
        if (results == 0) {
          req.flash('messages', '操作失敗')
          res.redirect('home')
          return
        }
        res.render('update', { results })
      }).catch((err) => {
        req.flash('messages', '缺乏權限或必要資料')
        res.redirect('back')
      })
  },
  handleUpdate: (req, res) => {
    const { id } = req.params
    const { title, content } = req.body
    Article.update({
      title,
      content
    }, {
      where: {
        id,
        richUserId: req.session.userId
      }
    }).then((results) => {
      res.redirect(`../post/${id}`)
    }).catch((err) => {
      req.flash('messages', '缺乏權限或必要資料')
      res.redirect('back')
    })
  },
  delete: (req, res) => {
    const { id } = req.params
    Article.update({
      isDelete: 1
    }, {
      where: {
        id,
        richUserId: req.session.userId
      }
    }).then((results) => {
      /* eslint-disable */
      if (results == 0) {
        req.flash('messages', '操作失敗')
        res.redirect('/manage')
        return
      }
      req.flash('messages', '刪除成功！')
      res.redirect('/manage')
    }).catch((err) => {
      req.flash('messages', '發生錯誤')
      res.redirect('/home')
    })
  }
}

module.exports = articleController
