const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello putitos')
})

app.listen(3000)