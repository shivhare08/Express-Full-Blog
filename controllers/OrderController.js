class OrderController{
    static screen = async(req,res)=>{
        try{
            res.render('orders/screen')
        }catch(err){
            console.log(err)
        }
    }
    static display = async(req,res)=>{
        try{
            res.render('orders/display')
        }
        catch(err){
            console.log(err)
        }
    }
}


module.exports = OrderController