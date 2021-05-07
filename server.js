const express = require('express')
const app = express()
const config = require('./config')

app.listen(config.PORT, () => console.log(`${config.PORT}`))

