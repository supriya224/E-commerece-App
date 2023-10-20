import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AiFillFacebook, AiFillTwitterCircle } from 'react-icons/ai';
function Login() {
  return (
    <div className='flex w-full h-screen bg-black'>
      <div className='flex m-auto '>
        <form className='flex w-[35vw] h-[80vh] m-9 mx-auto bg-blue-200'>
          <div className='flex m-auto pt-22 py-16 px-24 flex-grow flex-col gap-6 '>
            <h3 className=' flex items-center justify-center w-22 text-5xl font-bold'>Login</h3>
            <label className='flex flex-col text-lg mt-1'>
              Enter Your name:
              <input
                className='flex flex-col w-[19rem] pl-2 h-9 text-sm rounded-md outline-none'
                type='text'
                placeholder='Enter Your username'
              />
            </label>
            <label className='text-lg flex flex-col '>
              Enter Your Email:
              <input
                className='flex flex-col w-[19rem] h-9 text-sm rounded-md pl-7 outline-none'
                type='text'
                placeholder='Enter Your Email'
              />
            </label>
            <label className=' flex flex-col text-lg'>
              Enter Your password:
              <input
                className='flex flex-col w-[19rem] h-9 text-sm rounded-md pl-7 outline-none'
                type='password'
                placeholder='password'
              />
            </label>

            <button className=' mt-4 bg-blue-900 hover:bg-blue-400  p-2 rounded-full h-10 font-bold text-white'>
              Login
            </button>
            <div className='flex gap-9 m-auto'>
          
              <AiFillFacebook size={30} className='text-blue-700' />
              <FcGoogle size={30} />
              <AiFillTwitterCircle size={30} className='text-blue-400' />
            </div>

            <h3 className='m-auto gap-6'>
              Not a Member?<span className='pl-2 text-green-700 cursor-pointer'>SignUp</span>
            </h3>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
