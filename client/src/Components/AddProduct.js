
import { useState } from 'react'
import {Form, Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addProduct } from '../Redux/Actions/ProductAction'
import Rating from '@mui/material/Rating'

const AddProduct=()=>{
    const [name,setName]=useState('')
    const [description,setDescription] = useState('')
    const [price,setPrice] = useState(0)
    const [refrence,setRefrence] = useState(0)
    const [rate,setRate] = useState(0)
    const [imageP,setImageP] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleAddProduct=(a)=>{
        a.preventDefault()
        const ProductData = new FormData();
        ProductData.append('name', name)
        ProductData.append('imageP', imageP)
        ProductData.append('description', description)
        ProductData.append('price', price)
        ProductData.append('refrence', refrence)
        ProductData.append('rate', rate)

        dispatch(addProduct(ProductData,navigate))

    }
    return(
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter name" />
       </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control onChange={(e)=>setDescription(e.target.value)} type="text" placeholder="Enter description" />
       </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Price</Form.Label>
        <Form.Control onChange={(e)=>setPrice(e.target.value)} type="number" placeholder="Enter Number" />
       </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Refrence</Form.Label>
        <Form.Control onChange={(e)=>setRefrence(e.target.value)} type="text" placeholder="Enter Number" />
       </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Rate</Form.Label>
        <br/>
        <Rating onChange={(e)=>setRate(e.target.value)} />
       </Form.Group>
      
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Image</Form.Label>
      
        <Form.Control accept='image/*' onChange={(e)=>setImageP(e.target.files[0])} type="file" placeholder="Enter image link" />
       </Form.Group>
      <Button onClick={(e)=>handleAddProduct(e)} variant="primary" type="submit">
        Passer la Commande
      </Button>
    </Form>
    )
}

export default AddProduct