import React, { useEffect, useState } from 'react';
import {AiOutlineStar, AiOutlineShoppingCart} from 'react-icons/ai';

function Home() {
  const [listItem, setListItem] = useState();

  const getLists = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    const item = data;
    setListItem(item);
    console.log(item);
  };

  useEffect(() => {
    getLists();
  }, []);
  return (
    <>
      <section className='mt-8 mx-auto container'>
      <div className=' w-[100%] bg-white '>
          <img className='w-[100%] h-[60vh] ' src='https://t4.ftcdn.net/jpg/02/30/72/41/360_F_230724124_ZWlHSZBIvqvdJQj9at15WaKRqAtCUKTu.jpg'/>
           <div className='grid w-[30vw] text-white absolute top-44 left-[50rem] right-3'>
           <h1 className='font-bold text-2xl '>Welcome to my E-commerece website</h1>
           <p className='m-2 pt-0 '>This is the task for me to create E-commerece website and with responsive as well as show all products as well as cart listing</p>
           <div className='my-5  mx-28 items-center justify-center'>
           <button className='rounded-sm w-[10vw] h-[6vh] bg-black shadow-md shadow-white text-center items-center hover:scale-125 transform-gpu hover:transition-all duration-350 ease-out justify-center text-white border-9 border-white'>Get Started</button>
           </div>

           </div>
           
          </div>
        <section className='mx-auto container grid grid-cols-3 w-[100%] bg-blue-300'>
        
          {listItem?.map((item, index) => {
            return <div  className='gap-1 m-auto mx-12 my-8 w-[20vw] h-auto items-center justify-center bg-white rounded-md shadow-md shadow-white' key={index}>
              <img className='mt-3 mx-9 w-[10vw] items-center justify-center text-center' src={item.image} />
             <div className='flex flex-col m-3 p-3 items-center justify-center text-center '>
                  <p className='fon-bold'>{item.title}</p>
                  <p className='text-gray-400'>$ {item.price}</p>
                  <p className='flex'><AiOutlineStar className='flex items-center justify-center' />{item.rating.rate}</p>
                  <div className='gap-2 flex cursor-pointer hover:scale-125 transform-gpu hover:transition-all duration-350 ease-out '>
                  <button className='w-36 h-10 flex rounded-lg bg-black items-center justify-center text-center text-white shadow-md shadow-black  '>
                    < AiOutlineShoppingCart className="flex w-9 h-6 items-center justify-center mt-2  " /> Add to Cart</button>
                  {/* <button className='w-20 h-9  rounded-lg  bg-blue-900 items-center justify-center text-center text-white shadow-md shadow-black hover:scale-75 translate-x-4 skew-y-3 md:transform-none'>But Now</button> */}
                  </div>
           
            </div>
                 
         
        
          </div>;
          })}
        </section>
      </section>
    </>
  );
}

export default Home;
