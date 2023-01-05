const UserModel = require('../../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
class UserController{
    
    static register = async(req,res) =>{
        try{
            res.render('front/register',{message : req.flash('error')})
        }catch(err){
            console.log(err)
        }
    }

    static registrationinsert = async(req,res) =>{

            const {Name, Email, Password, Conpassword} = req.body
            const user = await UserModel.findOne({email : Email})
            if(user){
                req.flash('error','Email already exist !')
                res.redirect('/register')
            }else{
                if(Name && Email && Password && Conpassword){
                    if(Password == Conpassword){
                        try{
                            // const salt = await bcrypt.genSalt(10)
                            // const hashPassword = await bcrypt.hasg(password,salt) 
                            const hashPassword = await bcrypt.hash(Password,10)
                            const data = new UserModel({
                                name : req.body.Name,      //or name : Name
                                email : req.body.Email,
                                password : hashPassword
                            })
                            const datasaved = await data.save()
                            if(datasaved){
                                req.flash('success','Registration Successful , Please Login !')
                                res.redirect('/login')
                            }else{
                                res.redirect('/register')
                            }
                        }catch(err){
                            console.log(err)
                        }
                        
                    }else{
                        req.flash('error','Confirm Password doesnt match')
                        res.redirect('/register')
                    }
                }else{
                    req.flash('error','All fields are required !')
                    res.redirect('/register')
                }
            }

    }
    static verifyLogin = async(req,res)=>{
        try{
            //console.log(req.body)
            const {email , password }= req.body
            if (email && password) {
                const user = await UserModel.findOne({email : email})
                // console.log(user)
                if (user != null) {
                    const isMatched = await bcrypt.compare(password,user.password)
                    if ((user.email === email) && isMatched) {
                        //generate jwt token
                        const token = jwt.sign({ userId: user._id }, 'shannnnnnnnnnnnnnnnnnnnn08');
                        // console.log(token)
                        res.cookie('jwt',token)
                        res.redirect('/admindashboard')
                    } else {
                        req.flash('error','email & password are not valid!')
                        res.redirect('/login')
                    }
                } else {
                    req.flash('error','You are not exist !')
                    res.redirect('/login')
                }
            } else {
                req.flash('error','All fields are required !')
                res.redirect('/login')
            }
        }catch(err){
            console.log(err)
        }
    }
    
    static logout = async(req,res)=>{
        try {
            res.clearCookie('jwt')
            res.redirect('/')
        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = UserController