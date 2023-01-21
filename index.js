require('dotenv').config()
console.log(process.env.PORT)

const PORT = process.env.PORT

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello putitos')
})

app.listen(PORT)


