const mongoose = require('mongoose')
//============Anonumous function=================\\
const url = 'mongodb+srv://shashank:qwertyqwerty@cluster0.nqmk7ds.mongodb.net/expressblogg?retryWrites=true&w=majority'
const connectDB=()=>{
    //return mongoose.connect('mongodb://127.0.0.1:27017/blogwebsite')
    return mongoose.connect(url)
    .then(()=>{
        console.log('connection succesfully')
    })
    .catch((err)=>{
        console.log(err)
    })
}
module.exports = connectDB