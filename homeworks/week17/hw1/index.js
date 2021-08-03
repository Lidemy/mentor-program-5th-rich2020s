const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const flash = require('connect-flash')
// const path = require('path')
// const articleController = require('./controller/article')

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
app.use(express.static(__dirname + '/views'))

app.get('/home', (req, res) => {
  res.render('home')
})
app.get('/login', (req, res) => {
  res.render('login')
})

app.listen(port, () => {
  console.log(`Examlpe start! port:${port}`)
})
