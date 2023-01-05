const express = require('express')
const router = express.Router()

//=========================================================================
const EmployeeController = require('../controllers/EmployeeController.js')
const StudentController = require('../controllers/StudentController.js')
const OrderController = require('../controllers/OrderController.js')
const FrontEndController = require('../controllers/FrontEndController.js')
const AdminController = require('../controllers/admin/AdminController.js')
const BlogController = require('../controllers/admin/BlogController.js')
const CategoryController = require('../controllers/admin/CategoryControllers.js')
const UserController = require('../controllers/admin/UserController.js')
const auth = require('../middleware/auth')


// router.get("/about",(req,res)=>{
//     res.send('hlo bhai how are you')
// })

//==========StudentController=======================
router.get('/display',StudentController.display)



//==========EmployeeController=====================
router.get('/home',EmployeeController.home)
router.get('/cooler',EmployeeController.cooler)
router.get('/refri',EmployeeController.refri)
router.get('/ac',EmployeeController.ac)
router.get('/laptop',EmployeeController.laptop)



//===========OrderController========================
router.get('/screen',OrderController.screen)
router.get('/orderdisplay',OrderController.display)


//===========FrontEndController=====================
router.get('/',FrontEndController.index)
router.get('/blog',FrontEndController.blog)
router.get('/about',FrontEndController.about)
router.get('/contact',FrontEndController.contact)
router.get('/login',FrontEndController.login)
router.get('/blogDetail/:id',FrontEndController.blogDetail)



//==========Admin/UserController=============================
router.post('/verifyLogin',UserController.verifyLogin)
router.get('/register',UserController.register)
router.post('/admin/registerinsert',UserController.registrationinsert)
router.get('/logout',UserController.logout)


//===========AdminController=============================
router.get('/admindashboard',auth,AdminController.dashboard)


//===========Admin/Blog controller===========================
router.get('/admin/blogDisplay',auth,BlogController.createDisplay)
router.get('/admin/createblog',auth,BlogController.createblog)
router.post('/admin/blogInsert',BlogController.blogInsert)
router.get('/admin/viewBlog/:id',auth,BlogController.viewBlog)
router.get('/admin/editBlog/:id',auth,BlogController.editBlog)
router.post('/admin/blogUpdate/:id',auth,BlogController.blogUpdate)
router.get('/admin/deleteBlog/:id',auth,BlogController.deleteBlog)



//============Admin/Display controllers=========================
router.get('/admin/createDisplay',auth,CategoryController.categoryDisplay)
router.get('/admin/createCategory',auth,CategoryController.createCategory)
router.post('/admin/CatInsert',auth,CategoryController.catInsert)
router.get('/admin/viewCat/:id',auth,CategoryController.viewCat)
router.get('/admin/editCat/:id',auth,CategoryController.editCat)
router.post('/admin/updateCat/:id',auth,CategoryController.updateCat)
router.get('/admin/deleteCat/:id',auth,CategoryController.deleteCat)



module.exports = router