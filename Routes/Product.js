const express = require('express')
const { addProduct, readProduct, deleteProducts, updateProduct, getAllProducts } = require('../Controlles/Product')


const productRouter = express.Router()

productRouter.post('/addProduct',addProduct)

productRouter.get('/getAllProducts',getAllProducts)

productRouter.delete('/deleteProducts/:id',deleteProducts)

productRouter.put('/updataProduct/:id',updateProduct)

productRouter.get('/readProduct/:id',readProduct)  

module.exports = productRouter