
import { getAllProducts } from "../Redux/Actions/ProductAction"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import CardProducts from "./CardProducts"
import { getAllCommandes } from "../Redux/Actions/CommandeAction"
import { ListGroup } from "react-bootstrap"

const CommandesList=()=>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getAllCommandes())
        
    },[])

    const commandes = useSelector(state => state.CommandeReducer.commandes)
    return(
        <div className="cd">
        {   commandes &&
            // <div className="listPro">
                 <ListGroup as="ol" numbered>
            {
                
                commandes.map(el => 
                   
                    <ListGroup.Item as="li">Client name : {el?.owner?.name} Product : {el?.productO?.name} Prix totale : {el.prixtot} Quantité : {el.qte}</ListGroup.Item>
                
                   
            
            )}
            </ListGroup>

            // </div>


        }
    
        </div>
    )
}

export default CommandesList