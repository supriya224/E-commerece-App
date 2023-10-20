import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import {AiFillTwitterCircle } from 'react-icons/ai';
function SignUp() {
  return (
    <div className='mx-auto flex w-full h-screen bg-black'>
      <div className='flex m-auto w-[100vw]'>
      
        <form className='flex w-[75vw] h-[80vh] mx-auto bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg '>
        <img src='https://cdn3d.iconscout.com/3d/premium/thumb/login-page-5000918-4165667.png?f=webp' alt='' className='m-auto items-center w-[25rem] h-[25rem]'/>
          <div className='grid pt-22 py-9 px-24 flex-grow flex-col gap-3 '>
         <div className='m-auto my-2 py-1 px-1 w-full h-[70vh] bg-fuchsia-300 grid-flow-row-dense '>
            <h3 className=' flex items-center justify-center w-22 text-5xl font-bold'>Registration</h3>
            <label className='m-auto text-lg mt-1'>
              Enter Your name:
              <input
                className='grid w-[15rem] pl-2 h-9 text-sm rounded-md outline-none border-2 shadow-md shadow-blue-900'
                type='text'
                placeholder='Enter Your username'
              />
            </label>
           
            <label className='m-auto text-lg flex flex-col '>
              Enter Your Email:
              <input
                className='flex flex-col w-[15rem] h-9 text-sm rounded-md pl-7 outline-none border-2 shadow-md shadow-blue-900'
                type='text'
                placeholder='Enter Your Email'
              />
            </label>
            <label className='m-auto  flex flex-col text-lg'>
              Enter Your password:
              <input
                className='flex flex-col w-[15rem] h-9 text-sm rounded-md pl-7 outline-none border-2 shadow-md shadow-blue-900'
                type='password'
                placeholder='password'
              />
            </label>
            <label className='m-auto flex flex-col text-lg mt-1'>
              Confirm Password:
              <input
                className='w-[15rem] pl-2 h-9 text-sm rounded-md outline-none shadow-md border-2 shadow-blue-900'
                type='password'
                placeholder='confirm password'
              />
            </label>

            <button className=' m-8 mt-4 bg-blue-900 hover:bg-blue-300 shadow-lg shadow-black p-2 rounded-full h-10 font-bold text-white'>
              Registration
            </button>
            <div className=' pt-1 gap-9 m-auto'>
          <div className='relative'>
          <FcGoogle size={30} className=' cursor-pointer' />
          </div>
              
          <div>
          <AiFillTwitterCircle size={30} className='text-blue-900 cursor-pointer' />
          </div>
           
            </div>

            <h3 className='m-auto gap-2 pb-9'>
              Not a Member?<span className='pl-2 text-green-900 text-xl font-bold cursor-pointer'>SignUp</span>
            </h3>
         </div>
            
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
