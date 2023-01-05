const BlogModel = require('../models/Blog')
const CategoryModel = require('../models/Category')

class FrontEndController{
    static index = async(req,res)=>{
        try{
            const blogs = await BlogModel.find()
            //console.log(blogs)
            res.render('front/index',{b : blogs})
        }catch(err){
            console.log(err)
        }
    }
    static about = async(req,res)=>{
        try{
            res.render('front/about')
        }catch(err){
            console.log(err)
        }
    }
    static blog = async(req,res)=>{
        try{
            res.render('front/blog')
        }catch(err){
            console.loh(err)
        }
    }
    static contact = async(req,res)=>{
        try{
            res.render('front/contact')
        }catch(err){
            console.log(err)
        }
    }
    static login = async(req,res)=>{
        try{
            res.render('front/login',{success : req.flash('success'), errMsg : req.flash('error')})
        }catch(err){
            console.log(err)
        }
    }
    static blogDetail = async(req,res)=>{
        try{
            // console.log(req.params.id)
            const data = await BlogModel.findById(req.params.id)
            const catName = await CategoryModel.find()
            res.render('front/read',{result : data , categoryData : catName})
        }catch(err){
            console.log(err)
        }
    }
}

module.exports = FrontEndController