class EmployeeController{
    
    //render calls the file that exist in the views folder

    static home = async(req,res)=>{
        // res.send('<h1>home</h1>')
        res.render('home');
    }
    static cooler = async(req,res)=>{
        // res.send('<h1>cooler</h1>')
        res.render('cooler');
    }
    static refri = async(req,res)=>{
        // res.send('<h1>refri</h1>')
        res.render('refri');
    }
    static ac = async(req,res)=>{
        // res.send('<h1>ac</h1>')
        res.render('ac');
    }
    static laptop = async(req,res)=>{
        // res.send('<h1>laptop</h1>')
        res.render('laptop');
    }
}



module.exports = EmployeeController