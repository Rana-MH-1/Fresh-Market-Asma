const User = require("../Models/User")
const bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken');
const cloudinary = require('../Config/Cloudinary')
exports.SignUp=async(req,res)=>{
  
    
    try{
    const {email,password} = req.body  

    const found = await User.findOne({email}) 
    
    if (found) {
           return res.status(400).send({error :[{Msg : 'Email already exists'}]})
    }

    const newUser = new User(req.body)

    const salt = 10
    const hashedPassword = bcrypt.hashSync(password, salt);
    newUser.password = hashedPassword

    await newUser.save()
    
    const payload = { id: newUser._id }
    var token = jwt.sign(payload, process.env.privateKey); 

    res.status(200).send({Msg : 'User Registred', newUser,token})
    }catch(error){
     res.status(500).send({errors : [{Msg : 'could not resgister'}]})
    }
}


exports.SignIn=async(req,res)=>{
    try{
     const {email,password} = req.body

    const found =await User.findOne({email})

     if (!found) {
           return res.status(400).send({error :[{Msg : 'Email not exists'}]})
    }
     
    const decoded =bcrypt.compareSync(password, found.password);

     if (!decoded) {
           return res.status(400).send({error : [{Msg : 'Password Invalid'}]})
     }

     const payload = { id: found._id }
     var token = jwt.sign(payload, process.env.privateKey)
     
     res.status(200).send({Msg : "Logged In", found,token})
    
       
    }catch(error){
           res.status(500).send({errors : [{Msg : 'could not connect'}]})
    }
}


exports.ReadAllUsers=async(req,res)=>{
       try{
           const users = await User.find()
       res.status(200).send({Msg:"List of users",users})
       }catch(error){
           res.send(500).send('Could not find users')
       }
       }
       
exports.ReadOneUser=async(req,res)=>{
       try{
           const {id} = req.params
           const oneUser = await User.findById(id)
       res.status(200).send({Msg:"User infomations",oneUser})
       }catch(error){
           res.send(500).send('Could not find user')
       }
       }

       exports.UpdateUser=async(req,res)=>{
              try{
                  const {id}= req.params
                  const savedImage = await cloudinary.uploader.upload(req.files.imagePro.tempFilePath)

        // const newUser = new User({...req.body,imagePro:{public_id:savedImage.public_id,imgUrl: savedImage.url}})
                  await User.findByIdAndUpdate(id,{$set: {...req.body,imagePro:{public_id:savedImage.public_id,imgUrl: savedImage.url}}})
                  res.status(200).send({Msg :'User Update'})
              }catch(error){
                  res.status(500).send('Could not Update user')
              }
          }

exports.DeleteUser=async(req,res)=>{
       try{
           const {id}=req.params
           await User.findByIdAndDelete(id)
          res.status(200).send({Msg: 'User deleted'})
       }catch(error){
           res.status(500).send('Could not delete user')
       }
   }