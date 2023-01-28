const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        name : String,
        age : Number,
        email :{type : String,unique : true,required : true},
        password : {type : String, required : true},
        role : String,
        imagePro :mongoose.Schema.Types.Mixed
    }
)

module.exports = mongoose.model('Ouchi',userSchema)