import { useEffect, useState } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getoneproduct, updataProduct } from "../Redux/Actions/ProductAction";
import Rating from "@mui/material/Rating";
const EditProducts = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getoneproduct(id));
  }, []);

  const isLoading = useSelector((state) => state.ProductReducer.isLoading);
  const oneProduct = useSelector((state) => state.ProductReducer.oneProduct);
  const [name, setName] = useState(oneProduct.name);
  const [description, setDescription] = useState(oneProduct.description);
  const [price, setPrice] = useState(oneProduct.price);
  const [refrence, setRefrence] = useState(oneProduct.refrence);
  const [rate, setRate] = useState(oneProduct.rate);
  const [imageP, setImageP] = useState(oneProduct.imageP);

  /*  useEffect(()=>{
          setName(oneProduct.name)
          setDescription(oneProduct.description)
          setPrice(oneProduct.price)
          setRefrence(oneProduct.refrence)
          setRate(oneProduct.rate)
          setImageP(oneProduct.imageP)
     },[oneProduct])  */
  const navigate = useNavigate();
  const handleEdit = (a) => {
    a.preventDefault();
    const ProductData = new FormData();
    ProductData.append("name", name);
    ProductData.append("imageP", imageP);
    ProductData.append("description", description);
    ProductData.append("price", price);
    ProductData.append("refrence", refrence);
    ProductData.append("rate", rate);
    ProductData.append("public_id", oneProduct.imageP.public_id);
    dispatch(updataProduct(ProductData, id, navigate));
  };
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter name"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Enter description"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Price</Form.Label>
        <Form.Control
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          placeholder="Enter Number"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Refrence</Form.Label>
        <Form.Control
          value={refrence}
          onChange={(e) => setRefrence(e.target.value)}
          type="Number"
          placeholder="Enter Number"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Rate</Form.Label>
        <br />
        <Rating value={rate} onChange={(e) => setRate(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Image</Form.Label>
        <Form.Control
          accept="image/*"
          onChange={(e) => setImageP(e.target.files[0])}
          type="file"
          placeholder="Enter image link"
        />
      </Form.Group>

      <Button onClick={(e) => handleEdit(e)} variant="primary" type="submit">
        {isLoading ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          "Submit"
        )}
      </Button>
    </Form>
  );
};
export default EditProducts;
