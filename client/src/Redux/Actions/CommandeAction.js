import axios from "axios"
import { Navigate } from "react-router-dom"
import { GETALLCOMMANDES, GETMYCOMMANDE } from "../TypeActions/CommandeType"

export const getAllCommandes=()=>async(dispatch)=>{
    try {
       const res  = await axios.get('/api/commande/getAllCommande') 

       dispatch({
        type : GETALLCOMMANDES,
        payload : res.data.commandes
       })
    } catch (error) {
        console.log(error)
    }
}

export const getMyCommandes=(id)=>async(dispatch)=>{
    try {
       const res  = await axios.get(`/api/commande/getUserCommande/${id}`) 

       dispatch({
        type : GETMYCOMMANDE,
        payload : res.data.commandes
       })
    } catch (error) {
        console.log(error)
    }
}

export const addCommande=(cmd,id,navigate)=>async(dispatch)=>{
    const config={
      headers:{
        Authorized : localStorage.getItem('token')
      }
    }
   try{

      await axios.post('/api/commande/addCommande',cmd,config)

      dispatch(getMyCommandes(id))
      navigate('/myCommandeList')
   }catch (error){ 
    console.log(error)
   }
}