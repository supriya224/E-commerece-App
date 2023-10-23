import React from 'react';
import { Link } from 'react-router-dom';


function Navabr() {
  return (
    <header className='m-auto w-[100vw] h-[7vh] container flex shadow-lg shadow-blue-100 rounded-md'>
      <div className=' container mx-auto flex  justify-end '>
        <div className=''>
          <img
            className='w-12'
            src='https://cdn.imgbin.com/16/3/18/imgbin-online-shopping-shopping-cart-logo-e-commerce-market-ZB0j7BGkzwjLHhMxSKi37nGKD.jpg'
            size={30}
          />
        </div>

        <ul className='m-auto flex cursor-pointer gap-9 items-center justify-end'>
          <Link className='flex hover:text-blue-900' to={"/home"}>Home</Link>
        <Link to={"/products"}>Products</Link>  
         <Link to={"/cart"}>Cart</Link>
        </ul>
        <div className='flex gap-9  p-3 ml-[23rem] rounded-md bg-black text-white pl-2'>
          <Link  className='h-9 w-20 py-1 px-5 items-center mb-20 justify-between gap-9 bg-blue-500 text-white rounded-lg' to={"/login"}>Login</Link>
          <Link   className='h-9 w-20 py-1 px-4 items-center justify-between gap-9 bg-cyan-500 rounded-lg' to={"/signup"}>Signup</Link>
            </div>
      </div>
    </header>
  );
}

export default Navabr;
