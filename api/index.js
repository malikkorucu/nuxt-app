const express = require('express')
const app = express()

app.get('', (req, res, next) => { 
    res.send('asşldkfjasşldf')
})

module.exports = {
    path: "/api",
    handler:app
}