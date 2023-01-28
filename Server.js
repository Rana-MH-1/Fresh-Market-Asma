const express = require('express')
const ConnectDB = require('./Config/ConnectDB')
const productRouter = require('./Routes/Product')
const userRouter = require('./Routes/User')
const fileUpload = require('express-fileupload')
const commandeRouter = require('./Routes/Commande')


const app = express()

require('dotenv').config()

ConnectDB()

app.use(express.json()) 

app.use(fileUpload({
    useTempFiles : true,
}));

app.use('/api/auth',userRouter)

app.use('/api/product',productRouter)

app.use('/api/commande',commandeRouter)

app.listen(process.env.port,console.log(`Server is running on the port ${process.env.port}`))