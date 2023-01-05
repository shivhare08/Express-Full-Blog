const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true,
    }

})

const Contactmodel = mongoose.Schema('contact',ContactSchema)
module.exports = Contactmodel