import {combineReducers} from 'redux'
import AuthReducer from './AuthReducer'
import ErrorReeducer from './ErrorsReeducer'
import ProductReducer from './ProductReducer'
import CommandeReducer from './CommandeReducer'
const rootReducer = combineReducers({AuthReducer,ErrorReeducer,ProductReducer,CommandeReducer})

export default rootReducer