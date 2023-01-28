const mongoose = require('mongoose')

const commandeSchema = new mongoose.Schema(
    {
        qte : Number,
        prixtot : Number,
        owner : {
            type : mongoose.Types.ObjectId,
            ref : 'Ouchi'
        },
        productO : {
            type : mongoose.Types.ObjectId,
            ref : 'product'
        }
    }
)

module.exports = mongoose.model('commande',commandeSchema)