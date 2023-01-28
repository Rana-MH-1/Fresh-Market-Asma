import { getAllProducts } from "../Redux/Actions/ProductAction"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import CardProducts from "./CardProducts"

const ListProducts=()=>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getAllProducts())
        
    },[])

    const products = useSelector(state => state.ProductReducer.products)
    return(
        <div className="crd">
        {   products &&
            <div className="listPro">
            {
                products.map(el => <CardProducts el={el}/>)
            }
            </div>
        }
    
        </div>
    )
}

export default ListProducts