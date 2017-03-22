var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.get('/hello', function (req, res) {
  res.status(200).json({text: 'Hello World!'})
})

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  next()
})

app.use(bodyParser.json())

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
