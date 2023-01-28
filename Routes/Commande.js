const express = require('express')
const isAuth = require('../Middlewares/isAuth')
const Commande = require('../Models/Commande')


const commandeRouter = express.Router()


commandeRouter.post('/addCommande',isAuth,async(req,res)=>{
        try {
            
            const newCommande = new Commande({...req.body,owner : req.user._id})
            await newCommande.save()
            res.status(200).send({Msg : 'Commande added',newCommande})
        } catch (error) {
            res.status(500).send('Could not add commande')
        }
})

commandeRouter.get('/getAllCommande',async(req,res)=>{
    try{
        const commandes = await Commande.find().populate('owner').populate('productO')
    res.status(200).send({Msg:"List of commandes",commandes})
    }catch(error){
        res.send(500).send('Could not find commande')
    }
})   

commandeRouter.get('/getUserCommande/:id',async(req,res)=>{
    try{
        const {id} = req.params
        const commandes = await Commande.find({owner : id}).populate('owner').populate('productO')
    res.status(200).send({Msg:"List of commandes",commandes})
    }catch(error){
        res.send(500).send('Could not find commande')
    }
})  

commandeRouter.delete('/deleteCommande/:id',async(req,res)=>{
    try {
        const {id} = req.params

        await Commande.findByIdAndDelete(id)
        res.status(200).send({Msg : 'Commande deleted'})
    } catch (error) {
        res.status(500).send('Could not delete commande')
    }
})

commandeRouter.put('/updateCommande/:id',async(req,res)=>{
    try {
        const {id} = req.params
        await Commande.findByIdAndUpdate(id,{$set : req.body})
        res.status(200).send({Msg : "Commande updated"})
    } catch (error) {
        res.status(500).send('Could not update commande')
    }
})

module.exports = commandeRouter