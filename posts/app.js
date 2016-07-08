var express = require('express')
var bodyParser = require('body-parser')
var logger = require('./modules/logger')
var postRouter = require('./routes/posts')
var app = express()

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(logger)
app.use((req, res, next) => {
  var token = req.headers.token
  if (typeof token === 'undefined' || token === 'null') {
    return res.json({
      message: 'Token not found!',
      success: 200,
    })
  }
  next()
})
app.get('/', (req, res) => {
  res.sendFile('index.html')
})
app.use('/posts', postRouter)

module.exports = app

