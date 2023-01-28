import { GETALLPRODUCTS, GETONEPRODUCT,START_LOADING,END_LOADING } from "../TypeActions/ProductType"

const initialState = {
    isLoading:false,
    products : [],
    oneProduct:{}
}

const ProductReducer=(state=initialState,action)=>{
    switch (action.type) {
        case START_LOADING: return {...state,isLoading:true }
        case END_LOADING: return {...state, isLoading:false}
        case GETONEPRODUCT : return {...state,oneProduct : action.payload}
        case GETALLPRODUCTS : return {...state,products : action.payload}
        default: return state
    }
}

export default ProductReducer