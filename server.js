const express = require('express')
const { glob } = require('glob')
const app = express()
const config = require('./config')
const path = require('path')

app.listen(config.PORT, () => console.log(`${config.PORT}`))

// Setting -- start
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set("view engine", "ejs")
// Setting -- end


glob("routes/*Route.js", (err, files) => {
    files.forEach(file => {
        const route = require(path.join(__dirname, file))
        if(route.path && route.router) app.use(route.path, route.router)
    })
})