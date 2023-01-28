import { ALERT_ERROR, CLEAR_ERROR } from "../TypeActions/ErrorTypes"

export const alertError=(msg)=>(dispatch)=>{
    try{
        const id = Math.random()
         
      dispatch({
        type : ALERT_ERROR,
        payload : {id,msg}
      })

      setTimeout(()=>{
        dispatch({
            type : CLEAR_ERROR,
            payload : id
        })
      }, 3000);
    }catch(error) {
        console.log(error)
    }
}