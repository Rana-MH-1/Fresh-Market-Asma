import { useEffect, useState } from "react"
import { Card,Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate, useParams } from "react-router-dom"
import { addCommande } from "../Redux/Actions/CommandeAction"
import { deleteProduct, getoneproduct } from "../Redux/Actions/ProductAction"
import Rating from '@mui/material/Rating'

const DescProduct=()=>{

    const {id} = useParams()
    const [qte,setQte] = useState(0)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getoneproduct(id))
    },[])

    const oneProduct = useSelector(state=>state.ProductReducer.oneProduct)
    const token = localStorage.getItem('token')
    const user = useSelector(state=>state.AuthReducer.user)
    const navigate = useNavigate()
    return(
        <div className="DesPro">
            <h1>{oneProduct.name}</h1>
            <img src={oneProduct?.imageP?.imgUrl} alt='NotFound' />
            <h2>{oneProduct.description}</h2>
            <h2>{oneProduct.price}</h2>
            
            <Rating name="read-only" value={oneProduct.rate} readOnly />
            {
        (token && user?.role == "admin") ?
        <>
        <Card.Link as={Link} to={`/editProducts/${oneProduct._id}`}>Edit</Card.Link>

        <Button onClick={()=>dispatch(deleteProduct(oneProduct._id,navigate))}>Delete</Button>
        </>

        : (token && user?.role == "client") ?

        <>
         <input type='number' onChange={(e)=>setQte(e.target.value)} />
        <h5>{qte*oneProduct.price}</h5>
       
        <button className="commande" onClick={()=>dispatch(addCommande({qte,prixtot : qte*oneProduct.price,productO : oneProduct._id},user._id,navigate))}>Commander</button></>
    :
    <></> 
    }
    
        </div>
    )
}

export default DescProduct