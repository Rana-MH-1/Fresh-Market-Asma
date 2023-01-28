import { ALERT_ERROR, CLEAR_ERROR } from "../TypeActions/ErrorTypes"

const initialState = []

const ErrorReeducer=(state=initialState,action)=>{
    switch (action.type) {
         case ALERT_ERROR : return [...state,action.payload]
         case CLEAR_ERROR : return state.filter(el=> el.id != action.payload)
        default: return state
           
    }
}

export default ErrorReeducer  