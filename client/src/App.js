
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './Components/AddProduct';
import CommandeListMy from './Components/CommandeListMy';
import CommandesList from './Components/CommandesList';
import DescProduct from './Components/DescProduct';
import EditProducts from './Components/EditProducts';
import EditProfil from './Components/EditProfil';
import EditUsers from './Components/EditUsers';
import ErrorsC from './Components/ErrorsC';
import Footer from './Components/Footer';
import Home from './Components/Home';
import ListProducts from './Components/ListProducts';
import ListUsers from './Components/ListUsers';
import Login from './Components/Login';
import NavUser from './Components/NavUser';
import PrivateRoute from './Components/PrivateRoute';
import Profil from './Components/Profil';
import Register from './Components/Register';
import { current } from './Redux/Actions/AuthAction';

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(current())
  },[])
  return (
    <div>
      <NavUser/>
      <ErrorsC/>
      <div className='main'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/ListUsers' element={<ListUsers/>}/>
        <Route path='/EditUsers/:id' element={<EditUsers/>}/>
        <Route path='/EditProfil/:id' element={<EditProfil/>}/>
        <Route path='/profil' element={<PrivateRoute><Profil/></PrivateRoute>}/>
        <Route path='/ListProducts' element={<ListProducts/>}/>
        <Route path='/addProduct' element={<AddProduct/>}/>
        <Route path='/editProducts/:id' element={<EditProducts/>}/>
        <Route path='/product/:id' element={<DescProduct/>}/>
        <Route path='/commandeList' element={<CommandesList/>}/>
        <Route path='/myCommandeList' element={<CommandeListMy/>}/>
      </Routes>

      <Footer/>
      </div>
    </div>
  );
}

export default App;
