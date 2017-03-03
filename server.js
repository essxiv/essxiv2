var express = require('express')
var session = require('express-session')
var path = require('path')
var bodyParser = require('body-parser')
var db = require('./db/connection')

var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

module.exports = (function() {

    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, './public/index.html'))
    })

    app.listen(3000, function() {
        console.log('Listening On 3000...')
    })

})()
