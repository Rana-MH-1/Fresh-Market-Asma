const { body, validationResult } = require('express-validator')


exports.validationSignUp = [
    body('email','You must enter a valid Email').isEmail(),
    body('password','You must enter min 8 char').isLength({min : 8})
]

exports.validationSignIn = [
  body('email','You must enter a valid Email').isEmail(),
  body('password','You must enter min 8 char').isLength({min : 8})
]

exports.Validation=(req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next()
}