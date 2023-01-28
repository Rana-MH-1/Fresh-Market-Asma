import { CURRENT, FAIL, GET_ONE_USER, GET_USERS, LOGIN, LOGOUT, REGISTER } from "../TypeActions/AuthType"

const initialState = {
    user : {},
    errors : [],
    users:[],
    oneUser:{}
}

const AuthReducer=(state = initialState,action)=>{
      switch (action.type) {
         case REGISTER :
         localStorage.setItem('token',action.payload.token)
         return {...state,user : action.payload.newUser,errors : null}

         case LOGIN : 
         localStorage.setItem('token',action.payload.token)
         return {...state,user : action.payload.found,errors : null }
         
         case LOGOUT : 
         localStorage.removeItem('token')
         return {...state,user : null, errors : null}
         case FAIL : return {...state,errors : action.payload, user : null}
         case CURRENT : return {...state,user : action.payload,errors : null}
         default: return state
         
         case GET_ONE_USER : return {...state, oneUser: action.payload}
         case GET_USERS : return {...state, users :action.payload}
         
            
      }
}

export default AuthReducer