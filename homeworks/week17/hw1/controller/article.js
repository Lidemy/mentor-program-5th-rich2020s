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
      console.log(results)
      res.redirect('/home')
    }).catch((err) => {
      req.flash('messages', err.toString())
      res.redirect('back')
    })
  },
  getAll: (req, res) => {
    Article.findAll({
      limit: 5,
      order: [
        ['id', 'DESC']
      ],
      include: [{
        model: User,
        as: 'userId'
      }]
    }).then((results) => {
      // console.log(results)
      res.render('home', { results })
    }).catch((err) => {
      req.flash('messages', err.toString())
      res.redirect('/login')
    })
  },
  getMyarticle: (req, res) => {
    Article.findAll({
      where: {
        // id: req.session.userId
        richUserId: req.session.userId
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
      req.flash('messages', err.toString())
      res.redirect('back')
    })
  }
}

module.exports = articleController
