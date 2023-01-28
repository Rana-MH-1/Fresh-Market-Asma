const Product = require("../Models/Product")
const cloudinary = require('../Config/Cloudinary')


exports.getAllProducts=async(req,res)=>{
    try{
        const products = await Product.find()
    res.status(200).send({Msg:"List of products",products})
    }catch(error){
        res.send(500).send('Could not find products')
    }
}


exports.addProduct=async(req,res)=>{
    try {
        const found = await Product.findOne({name : req.body.name})

        if(found){
            return res.status(400).send('Product already exists')
        }
        //cloudinairy upload
        const savedImage = await cloudinary.uploader.upload(req.files.imageP.tempFilePath)

        const newProduct = new Product({...req.body,imageP:{public_id:savedImage.public_id,imgUrl: savedImage.url}})
        await newProduct.save()
        res.status(200).send({Msg : 'Product added',newProduct})
    } catch (error) {
        res.status(500).send('Could not add product')
    }
}

exports.readProduct=async(req,res)=>{
    try {
        const products = await Product.find()
        res.status(200).send({Msg : "List of product",products})
    } catch (error) {
        res.status(500).send('Could not find products')
    }
}


exports.deleteProducts=async(req,res)=>{
    try {
        const {id} = req.params

        await Product.findByIdAndDelete(id)
        res.status(200).send({Msg : 'Product deleted'})
    } catch (error) {
        res.status(500).send('Could not delete product')
    }
}

exports.updateProduct=async(req,res)=>{
   
    try {
        const {id} = req.params
        const {public_id} = req.body
        await cloudinary.uploader.destroy(public_id)
        const savedImage = await cloudinary.uploader.upload(req.files.imageP.tempFilePath)
        await Product.findByIdAndUpdate(id,{...req.body,imageP:{public_id:public_id,imgUrl:savedImage.url}},{new:true})
        console.log('req.body',req.body)
        res.status(200).send({Msg : "Product updated"})
    } catch (error) {
        res.status(500).send('Could not update Product')
    }
}


exports.readProduct=async(req,res)=>{
    try {
        const {id} = req.params
        const found = await Product.findById(id)
        res.status(200).send({Msg : 'Product founded',found})
    } catch (error) {
        res.status(500).send('Could not find product')
    }
}

