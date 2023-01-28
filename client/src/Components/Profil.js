import { useEffect } from "react"
import { Button, Card } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { current, deleteProfil } from "../Redux/Actions/AuthAction"

const Profil=()=>{
  const dispatch = useDispatch()
  const user = useSelector(state=> state.AuthReducer.user)
    useEffect(()=>{
    dispatch(current())
    },[user])
    
   const navigate = useNavigate()

    return(
      <div>
        {
          user &&
          <div>
           

          <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={user?.imagePro?.imgUrl} />
                <Card.Body>
                  <Card.Title>{user.name}</Card.Title>
                  <Card.Text>
                  Email : {user.email}
                  <br/>
                  Age : {user.age}
                  </Card.Text>
                
                  <Button as={Link} to={`/EditProfil/${user._id}`}variant="outline-danger">Edit Profile</Button>
              
                  <Button onClick={()=>dispatch(deleteProfil(user._id,navigate))} variant="outline-warning">Delete</Button>
                </Card.Body>
              </Card>
        
          {/* <h1>{user.name}</h1>
          <h2>{user.email}</h2>
          <h2>{user.age}</h2>
          <h3>{user._id}</h3>
          <Card.Link as={Link} to={`/EditProfil/${user._id}`}>Edit</Card.Link>
          <Button onClick={()=>dispatch(deleteProfil(user._id,navigate))}>Delete</Button> */}
        </div>
        }

      </div>
        
    )
}
 
export default Profil