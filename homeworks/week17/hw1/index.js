const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const flash = require('connect-flash')
// const path = require('path')
const articleController = require('./controller/article')
const userController = require('./controller/user')

const app = express()
const port = 5001

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))
app.use(flash())
app.set('view engine', 'ejs')
/* eslint-disable */
app.use(express.static(__dirname + '/views'));
app.use((req, res, next) => {
  res.locals.user = req.session.user || false
  res.locals.messages = req.flash('messages')
  next()
})

app.get('/home', articleController.get)
app.get('/login', (req, res) => {
  res.render('login')
})
app.get('/addpost', (req, res) => {
  res.render('addpost')
})
app.get('/logout', userController.logout)
app.get('/manage', articleController.getMyarticle)
app.get('/post/:id', articleController.getArtcileById)
app.get('/allpost', articleController.getAll)
app.get('/update/:id', articleController.update)
app.get('/delete/:id', articleController.delete)
app.post('/login', userController.login)
app.post('/addpost', articleController.add)
app.post('/update/:id', articleController.handleUpdate)
app.listen(port, () => {
  console.log(`Examlpe start! port:${port}`)
})
