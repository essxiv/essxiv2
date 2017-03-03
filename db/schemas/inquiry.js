var mongoose = require('mongoose')

var inquirySchema = mongoose.Schema({
    userId: {
        type: String,
        unique: true,
        index: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Inquiry', inquirySchema)
