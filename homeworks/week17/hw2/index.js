const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const flash = require('connect-flash')
const userController = require('./controller/user.js')
const lotteryController = require('./controller/lottery.js')

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
function isLogin(req, res, next) {
  if (!req.session.user) {
    req.flash('/messages', '請先登入')
    res.redirect('/login')
    return
  }
  next()
}

app.get('/lottery', lotteryController.getAll)
app.get('/manage', isLogin, lotteryController.getAll)
app.get('/login', (req, res) => {
  res.render('login')
})
app.get('/add-new-lottery', isLogin, (req, res) => {
  res.render('add-new-lottery')
})
app.get('/drawing', lotteryController.draw)
app.get('/delete-lottery/:id', isLogin, lotteryController.delete)
app.get('/update-lottery/:id', isLogin, lotteryController.edit)
app.post('/update-lottery/:id', isLogin, lotteryController.update)
app.post('/add-new-lottery', isLogin, lotteryController.add)
app.post('/login', userController.login)

app.listen(port, () => {
  console.log(`Examlpe start! port:${port}`)
})
