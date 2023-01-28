
import {Button, Card} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteProduct } from '../Redux/Actions/ProductAction'
import Rating from '@mui/material/Rating'
import { useState } from 'react'

const CardProducts=({el})=>{
  const token = localStorage.getItem('token')
  const user = useSelector(state=>state.AuthReducer.user)
  const [showMore, setShowMore] = useState(false);
     const dispatch = useDispatch()
    return(
        <Card  className='card'  style={{ width: '20rem' }}>
      <Card.Img variant="top" src={el?.imageP?.imgUrl} />

     <Card.Body> 
        <Card.Title><Link to={`/product/${el._id}`}>{el.name}</Link></Card.Title>
        </Card.Body>


    
        <Card.Text className='btcard' >
        {showMore ? el.description : `${el.description.substring(0, 30)}`}
     <button onClick={()=>setShowMore(!showMore)}>Show more</button>
        {/* {el.description} */}
    </Card.Text>

    <Card.Title>{el.price} DT</Card.Title>
        

     <Card.Title>{el.refrence}</Card.Title>
   
        
      {/* <Card.Title>{el.rate}</Card.Title> */}
      <Rating name="read-only" value={el.rate} readOnly />
     {/* {
        (token && user.role == "admin") &&
        <>
        <Card.Link as={Link} to={`/editProducts/${el._id}`}>Edit</Card.Link>
        <Button onClick={()=>dispatch(deleteProduct(el._id))}>Delete</Button>
        </>
      }
     */}
    </Card>
    )
}
export default CardProducts