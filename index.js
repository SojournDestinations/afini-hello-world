var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var request = require('request')

app.get('/hello', function (req, res) {
  request.get('ip-172-31-68-20.us-west-2.compute.internal:3000/backend', function (err, response, body) {
    if (err) {
      res.status(500).json(err)
    } else {
      res.status(200).json(body)
    }
  })
})

app.get('/backend', function (req, res) {
  res.status(200).json({text: "holy poop, it's the backend"})
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
