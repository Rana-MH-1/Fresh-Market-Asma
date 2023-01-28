import {Button, Card} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteUser } from '../Redux/Actions/AuthAction'
const CardUsers=({el})=>{  
     const dispatch =useDispatch()
    
    return(
      <Card className='ticket' style={{ width: '30rem' }}>
        
                <Card.Img className='imgus' variant="top" src={el?.imagePro?.imgUrl} />
                <Card.Body>
                  <Card.Title>{el.name}</Card.Title>
                  <Card.Text>
                  Email : {el.email}
                  <br/>
                  Age : {el.age}
                  </Card.Text>
                  
                  <Button as={Link} to={`/EditUsers/${el._id}`}variant="outline-success">Edit Profile</Button>
              
                  <Button onClick={()=>dispatch(deleteUser(el._id))}variant="outline-warning">Delete</Button>
                </Card.Body>
              </Card>


      //   <Card style={{ width: '18rem' }}>
      //   <Card.Body>
      //     <Card.Title>{el.name}</Card.Title>
      //     <Card.Subtitle className="mb-2 text-muted">{el.age}</Card.Subtitle>
      //     <Card.Text>
      //     {el.email}
      //     </Card.Text>
      //     <Card.Link as={Link} to={`/EditUsers/${el._id}`}>Edit</Card.Link>
      //     <Button onClick={()=>dispatch(deleteUser(el._id))}>Delete</Button>
      //   </Card.Body>
      // </Card>
    )
}

export default CardUsers