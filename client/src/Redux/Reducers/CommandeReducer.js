import { GETALLCOMMANDES, GETMYCOMMANDE } from "../TypeActions/CommandeType"

const initialState={
    commandes : [],
    myCommande : []
}


const CommandeReducer=(state = initialState,action)=>{
    switch (action.type) {
        case GETMYCOMMANDE : return {...state,myCommande : action.payload}
        case GETALLCOMMANDES: return {...state,commandes : action.payload}
        default: return state
    }
}

export default CommandeReducer