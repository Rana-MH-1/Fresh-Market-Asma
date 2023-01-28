

import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { ListGroup } from "react-bootstrap"
import { getMyCommandes } from "../Redux/Actions/CommandeAction"


const CommandeListMy=()=>{
    const dispatch = useDispatch()
    const user = useSelector(state => state.AuthReducer.user)
    useEffect(()=>{
        dispatch(getMyCommandes(user._id))
        
    },[])

    const myCommande = useSelector(state => state.CommandeReducer.myCommande)
    return(
        <div className="cd">
        {   myCommande &&
            // <div className="listPro">
                 <ListGroup as="ol" numbered>
            {
                
                myCommande.map(el => 
                   
                    <ListGroup.Item as="li">Client name : {el?.owner?.name} Product : {el?.productO?.name} Prix totale : {el.prixtot} Quantité : {el.qte}</ListGroup.Item>
            
            )}
            </ListGroup>

            // </div>


        }
    
        </div>
    )
}

export default CommandeListMy