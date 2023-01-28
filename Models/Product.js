const mongoose= require("mongoose")

const productSchema = new mongoose.Schema({
    name : {
         required : true,
         type : String,
    },

    description: {
        required: true,
        type: String,
      },

      price: {
        required: true,
        type: Number,
      },
     
      refrence:{
        required: true,
        type: String,
      },

      rate:{
        required: true,
        type: Number,
      },

      imageP: {
        required: true,
        type: mongoose.Schema.Types.Mixed,
      }
      

})

module.exports = mongoose.model("product", productSchema);
