const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name : {                                          //title is the property whc will be string
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }    
},{timestamps:true})

const UserModel = mongoose.model('Users',UserSchema)
module.exports = UserModel