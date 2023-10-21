import * as React from 'react';
import Home from './pages/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className=''> 
  
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          {/* <Route path="/home" element={<Home />} /> */}
        </Routes>
      </BrowserRouter>
      <div className=''>
      <Home />
      </div>
    
    </div>
  );
}
//          

export default App;
