import axios from "axios"
import { GETALLPRODUCTS, GETONEPRODUCT,START_LOADING,END_LOADING } from "../TypeActions/ProductType"

export const startLoading = () => {
    return {
        type: START_LOADING,
    }
}
export const EndLoading = () => {
    return {
        type: END_LOADING,
    }
}

export const getAllProducts=()=>async(dispatch)=>{
    try {
       const res  = await axios.get('/api/product/getAllProducts') 

       dispatch({
        type : GETALLPRODUCTS,
        payload : res.data.products
       })
    } catch (error) {
        console.log(error)
    }
}


export const addProduct=(newProduct,navigate)=>async(dispatch)=>{
    try {
        await axios.post('/api/product/addProduct',newProduct)
        dispatch(getAllProducts())
        navigate('/ListProducts')
    } catch (error) {
        console.log(error)
    }
}

export const deleteProduct=(id,navigate)=>async(dispatch)=>{
    try {
        await axios.delete(`/api/product/deleteProducts/${id}`)
        dispatch(getAllProducts())  
        navigate('/ListProducts')
    } catch (error) {
        console.log(error)
    }
}

export const getoneproduct=(id)=>async(dispatch)=>{
      try{
        const res = await axios.get(`/api/product/readProduct/${id}`)
        dispatch({
            type : GETONEPRODUCT,
            payload : res.data.found
        })
      }catch(error){
        console.log(error)
      }

}

export const updataProduct=(updProduct,id,navigate)=>async(dispatch)=>{
       dispatch(startLoading())
       try{
           await axios.put(`/api/product/updataProduct/${id}`,updProduct)
           dispatch(EndLoading())
           dispatch(getoneproduct(id))
           navigate(`/product/${id}`)
           
       }catch(error){
        console.log(error)
       }
}