//for security 

const UserModel = require('../models/user')
const jwt = require('jsonwebtoken')

const auth = async(req,res,next)=>{
    try {
        const token = req.cookies.jwt
        //console.log(token)
        const verifyUser = jwt.verify(token,'shannnnnnnnnnnnnnnnnnnnn08')
        //console.log(verifyUser)
        const user = await UserModel.findOne({_id : verifyUser.userId})
        // console.log(user)
        req.data = user
        next()
    } catch (err) {
        res.redirect('/login')
    }
}


module.exports = auth