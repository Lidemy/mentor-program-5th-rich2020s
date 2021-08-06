const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const flash = require('connect-flash')

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

app.get('/lottery', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`Examlpe start! port:${port}`)
})
