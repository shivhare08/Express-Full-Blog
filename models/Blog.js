
//================Here collection builds============\\
//models create interface

const mongoose = require('mongoose')

//========define schema============\\
const BlogSchema = new mongoose.Schema({
    title : {                                          //title is the property whc will be string
        type : String,
        required : true,
    },
    description : {
        type : String,
        required : true,
    },
    name : {
        type : String,
        required : true
    },
    // whenever we insert image then we get public id and url from cloudnary
    image : {
        public_id : {
            type : String,
            required : true,
        },
        url : {
            type : String,
            required : true,
        },
    }
      
},{ timestamps : true})

const BlogModel = mongoose.model('blogs',BlogSchema)     //here blogs is collection name
module.exports = BlogModel


//In the blog folder 4 include image feilds is created
