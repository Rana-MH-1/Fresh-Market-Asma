import {Nav,Navbar,Container} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { logout } from '../Redux/Actions/AuthAction'



const NavUser=()=>{
  const token = localStorage.getItem('token')
  console.log(token)
  const user = useSelector(state => state.AuthReducer.user)
 const dispatch = useDispatch()
 const navigate = useNavigate()
    return(
      <Navbar className='navb'>
        <Container>
          
        
        <img src='/logo.png'alt="fresh market" width="100" height="100"></img>
         
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          
        
            {/* <Nav.Link as={Link} to="/ListUsers">Users</Nav.Link>
            <Nav.Link as={Link} to="/ListProducts">Products</Nav.Link>
            <Nav.Link as={Link} to="/addProduct">Add Product</Nav.Link> */}
       
            
            {
              token && user?.role =="client" ?
              <>
              <Nav.Link as={Link} to="/profil">Profile</Nav.Link>
              <Nav.Link as={Link} to="/ListProducts">Products</Nav.Link>
              <Nav.Link as={Link} to="/myCommandeList">My Commandes</Nav.Link>
              <Nav.Link onClick={()=>{dispatch(logout());navigate('/')}}>Logout</Nav.Link>
              </>

              :
              token && user?.role =="admin" ?
              <>
              <Nav.Link as={Link} to="/profil">Profile</Nav.Link>
              <Nav.Link as={Link} to="/ListUsers">Users</Nav.Link>
              <Nav.Link as={Link} to="/ListProducts">Products</Nav.Link>
              <Nav.Link as={Link} to="/addProduct">Add Product</Nav.Link>
              <Nav.Link as={Link} to="/commandeList">Commandes</Nav.Link>
              <Nav.Link onClick={()=>{dispatch(logout());navigate('/')}}>Logout</Nav.Link>
              </>
              :
              <>
              <Nav.Link as={Link} to="/ListProducts">Products</Nav.Link>
              <Nav.Link as={Link} to="/register">Register</Nav.Link>
              
              <Nav.Link as={Link} to="/Login">Login</Nav.Link>
              
              
              </>
              }

        </Container>
      </Navbar>
    )
}

export default NavUser