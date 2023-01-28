import { useState } from 'react'
import {Form,Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../Redux/Actions/AuthAction'

const Login=()=>{
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const dispatch = useDispatch('')
    const navigate = useNavigate()

    const hanleLogin=(a)=>{
      a.preventDefault()
      dispatch(login({email,password},navigate))
    }

    return(
        <Form>
                <h2>Welcome back</h2>
              
          
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="Enter password" />
        </Form.Group>

       <div class="checkboxy">
          <input name="cecky" id="checky" value="1" type="checkbox" /><label class="terms">I accept the terms of use</label>
          </div>
        <br/> 
        <Button onClick={(e)=> hanleLogin(e)} variant="primary" type="submit">
         Create My Account
        </Button>


      </Form>
    )
}

export default Login