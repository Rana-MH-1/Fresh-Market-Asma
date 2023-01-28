const express = require('express')

const { SignUp, SignIn, ReadAllUsers, ReadOneUser, UpdateUser, DeleteUser } = require('../Controlles/User');
const isAuth = require('../Middlewares/isAuth');
const { validationSignUp, Validation, validationSignIn } = require('../Middlewares/Validator');
const userRouter = express.Router()

userRouter.post('/SignUp',validationSignUp,Validation,SignUp)
 
userRouter.post('/SignIn',validationSignIn,Validation,SignIn)

userRouter.get('/currentUser',isAuth,(req,res)=>{ res.send(req.user)})


userRouter.get('/ReadAllUsers',ReadAllUsers)

 userRouter.get('/ReadOneUser/:id',ReadOneUser)

 userRouter.put('/UpdateUser/:id',UpdateUser)     

userRouter.delete('/DeleteUser/:id',DeleteUser)


module.exports = userRouter