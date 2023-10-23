import * as React from 'react';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/SignUp';
import Navbar from './pages/Navbar';
import Cart from './pages/Cart';
import Products from './pages/products';

function App() {
  return (
  <>
<Navbar/>
   <Routes>
    <Route path="/home" element={<Home/>}></Route>
    <Route path="/products" element={<Products/>}></Route>
    <Route path="/cart" element={<Cart/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
   
   </Routes>


      </>
    
   
  );
}
//          

export default App;
