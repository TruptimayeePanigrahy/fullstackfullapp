const jwt=require("jsonwebtoken")

const authmodel=(req,res,next)=>{
const token=req.headers.authorization
if(token){
  const decoded=jwt.verify(token,"bruce")
  

    if(decoded){
        console.log(decoded)
        req.body.userid=decoded.userid
        
        next()
    }else{
        res.status(400).send("please login first")
    }
}
else{
    res.status(400).send("something went wrong!!")
}


}


module.exports={authmodel}