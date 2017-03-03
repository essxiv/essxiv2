var mongoose = require('mongoose')
var Inquiry = require('./schemas/inquiry')
var exampleData = require('./exampleData.json')

mongoose.connect('mongodb://localhost:27017/portfolio', function() {

    Inquiry.remove({}, function(error) {
        if (error) {
            return error
        }
    })

    Inquiry.collection.insertMany(exampleData, function(error, result) {
        if (error) {
            return error
        }
        mongoose.connection.close()
    })
    
})
