import { useEffect, useState } from "react"
import { Form,Button } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { getOneUser, updateUser } from "../Redux/Actions/AuthAction"


const EditUsers=()=>{
  const {id} = useParams()
  console.log(id)
  const dispatch = useDispatch()

  useEffect(()=>{
      dispatch(getOneUser(id))
  },[])

  const oneUser = useSelector(state=>state.AuthReducer.oneUser)
     

  const [name,setName] = useState(oneUser.name)
  const [age,setAge] = useState(oneUser.age)
  const [email,setEmail] = useState(oneUser.email)
  const [imagePro,setImagePro] = useState(oneUser.imagePro)

  useEffect(()=>{
       setName(oneUser.name)
       setAge(oneUser.age)
       setEmail(oneUser.email)
       setImagePro(oneUser.imagePro)
  },[oneUser])

  const navigate = useNavigate()
  const handleEdit=(a)=>{
        a.preventDefault()
        const upUser = new FormData();
        upUser.append('name', name)
        upUser.append('age',age)
        upUser.append('email',email)
        upUser.append('imagePro',imagePro)
        dispatch(updateUser(upUser,id,navigate))
  }
    return(
       <div>
             <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter name" />       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Age</Form.Label>
        <Form.Control value={age} onChange={(e)=>setAge(e.target.value)} type="number" placeholder="Enter age" />       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" />       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Image</Form.Label>
        <Form.Control accept='image/*' onChange={(e)=>setImagePro(e.target.files[0])} type="file" placeholder="Enter image link" />       
        {/* <Form.Control value={imagePro} onChange={(e)=>setimagePro(e.target.value)} type="email" placeholder="Enter email" />        */}
      </Form.Group>

      
      <Button onClick={(e)=>handleEdit(e)} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </div>
    )
}

export default EditUsers