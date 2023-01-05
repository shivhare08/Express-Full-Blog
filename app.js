const express = require('express')
const app = express()
const port = 5000
const connectDB = require('./db/connectDB')
const bodyParser = require("body-parser")
const session = require('express-session')
const flash = require('connect-flash');
const fileUpload = require("express-fileupload");
// var cloudinary = require('cloudinary');
var cookieParser = require('cookie-parser')


//============file upload==========================================\\




//=======cookies========\\
app.use(cookieParser())

//=====session message==========\\
app.use(session({
    secret: 'secret',
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false,
    
  }));

//=======flash message=========\\
app.use(flash());


//============web routing===========================================\\
const web = require('./routs/web.js')

//=============bodyParser=========================\\
app.use(bodyParser.urlencoded({extended:false}))

//=========file upload======================\\
app.use(fileUpload({useTempFiles: true}));

app.use('/',web)

//=====connecting with ejs(its automatically use the views folder)===\\
app.set('view engine','ejs')


//======================Link public folder============================\\
app.use(express.static('public'))


//======================DB connect====================================\\
connectDB();


//======================server========================================\\
app.listen(port,()=>{
    console.log(`server has started localhost:${port}`)
})




