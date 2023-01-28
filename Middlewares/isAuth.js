const User = require("../Models/User");
var jwt = require('jsonwebtoken');

const isAuth=async(req,res,next)=>{
   try{
    const token = req.header('Authorized')

    var decoded = jwt.verify(token, process.env.privateKey);
    if (!decoded) {
        return res.status(400).send({errors : [{Msg : "Token invalide"}] })
    }

    const found = await User.findById(decoded.id)

    req.user = found
    next()
   }catch(error){
     res.status(500).send({errors :[{Msg : 'No autho'}]})
   }
}

module.exports = isAuth