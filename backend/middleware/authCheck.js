const jwt=require("jsonwebtoken")
const User=require("../model/signUpModels")
exports.authCheck=async (req,res,next)=>{
    const authHader=req.headers["authorization"]
    console.log(authHader , " authcheck")
    const token=authHader.split(" ")
    console.log(token[1],"token")
    try {
        var decoded = jwt.verify(token[1], 'hasdgjhgsahdv');
        console.log(decoded, "decode")
        req.user=decoded.id
        // const checkUser=await User.findById(decoded.id)
        const checkUser= decoded.id === 1
        if(checkUser) next();
        else res.send({err:"user not vaild"})
      } catch(err) {
        res.send({err:"invalide user token"})
      }
}