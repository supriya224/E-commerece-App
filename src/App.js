import React from 'react';
// import router from router dom@6
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import home file from pages it's a main page
import Home from './pages/Home';
// import product details page where it store all details or product
import ProductDetails from './pages/ProductsDetails';
// import sidebar component its store add to cart page where we can see all items which is add by the user
import Sidebar from './components/Sidebar'
// this is header page where some values are available
import Header from './components/Header'
// login page is here import
import Login from './components/Login';
// register page is here import
import Register from './components/Register';


const App = () => {
  return <div className='overflow-hidden'>
    <Router>
      {/* header page router */}
    <Header/>    
    {/* all file route */}
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/product/:id' element={<ProductDetails/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
      {/* sidebar */}
      <Sidebar/>
    </Router>
  </div>;
};

export default App;
