const CategoryModel = require('../../models/Category')
const BlogModel = require('../../models/Category')


class CategoryController{
    static categoryDisplay = async(req,res)=>{
        try{
            const result = await CategoryModel.find()
            // console.log(result)
            res.render('admin/category/createDisplay',{data : result})
        }catch(err){
            console.log(err)
        }
    }
    static createCategory = async(req,res)=>{
        try{
            res.render('admin/category/createCategory')
        }catch(err){
            console.log(err)
        }
    }
    static catInsert = async(req,res)=>{
        try{
            //console.log(req.body)
            //console.log(data)
            const result = new CategoryModel({
                catName : req.body.catName,
            })
            await result.save()
            res.redirect('/admin/createCategory')   //url of route here
            
        }
        catch(err){
            console.log(err)
        }
    }
    static viewCat = async(req,res)=>{
        try{
            const viewCat = await CategoryModel.findById(req.params.id)
            res.render('admin/category/viewCat',{d:viewCat})
        }
        catch(err){
            console.log(err)
        }
    }
    static editCat = async(req,res)=>{
        try{
            const editCat = await CategoryModel.findById(req.params.id)
            res.render('admin/category/editCat',{d:editCat})
        }
        catch(err){
            console.log(err)
        }
    }
    static updateCat = async(req,res)=>{
        try{
            const updateCat = await BlogModel.findByIdAndUpdate(req.params.id,{
                catName : req.body.catName,
            })
            await updateCat.save()
            res.redirect('/admin/createDisplay')
        }
        catch(err){
            console.log(err)
        }
    }
    static deleteCat = async(req,res)=>{
        try{
            const deletecat = await CategoryModel.findByIdAndDelete(req.params.id)
            res.redirect('/admin/createDisplay')
        }
        catch(err){
            console.log(err)
        }
    }
}

module.exports = CategoryController