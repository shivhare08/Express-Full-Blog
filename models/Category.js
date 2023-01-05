const mongoose = require('mongoose')

//======define schema========\\
const CategorySchema = new mongoose.Schema({
    catName : {
        type : String,
        required : true,
    }
},{timestamps : true });

const CategoryModel = mongoose.model('categories',CategorySchema);   //blogs collection
module.exports = CategoryModel