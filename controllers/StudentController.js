class StudentController{
    static display = async(req,res)=>{
        try{
            res.send('<h1>hlo display</h1>')
        }catch(err){
            console.log(err)
        }
    }
}



module.exports = StudentController