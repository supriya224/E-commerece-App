import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { PiAppleLogoLight } from 'react-icons/pi';
// import SignUp from './SignUp';
function SignUp() {
  return (
    <div className='py-24 min-h-screen bg-gray-200'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:h-[80vh]  lg:flex-row w-10/12 lg:w-9/12 bg-cyan-200 rounded-xl mx-auto shadow-lg overflow-hidden'>
          <div className='w-full lg:w-1/2 flex flex-col bg-auto bg-center bg-no-repeat'>
            {/* creating image container */}
            <img
              className='h-screen items-center justify-center container'
              src='https://w0.peakpx.com/wallpaper/425/176/HD-wallpaper-cyan-windows-11-logo-windows-11.jpg'
            />
          </div>
          {/* creating from section */}
             <div className='w-full lg:w-1/2 py-16 px-12'>
              <h3 className='text-3xl text-cyan-700 font-bold mb-4 items-center justify-center text-center'>SignUp</h3>
             <p className='mb-4'>Create your account, It's free and only take a minute</p>

               <form action='' className=''>
              {/* start form for registration component */}
              <div className='grid grid-cols-2 gap-5 text-sm '>
              
               
                  <input
                    className='outline-none flex border border-gray-400 py-1 px-2 rounded-md shadow-md shadow-cyan-900 '
                    type='text'
                    placeholder='First Name'
                  />

                  <input
                    className='outline-none flex border border-gray-400 py-1 px-2 w-full rounded-md shadow-md shadow-cyan-900'
                    type='text'
                    placeholder='Last Name '
                  />
               </div>
               <div className='mt-5 grid grid-cols-1 gap-4 m-auto text-sm'>
               <input
                    className='outline-none flex border border-gray-400 py-1 px-2 rounded-md shadow-md shadow-cyan-900'
                    type='text'
                    placeholder='Enter Your Email '
                  />
              
                  <input
                    className='outline-none flex border border-gray-400 py-1 px-2 rounded-md shadow-md shadow-cyan-900 '
                    type='password'
                    placeholder='password'
                  />
                   <input
                    className='outline-none flex border border-gray-400 py-1 px-2 rounded-md shadow-md shadow-cyan-900'
                    type='password'
                    placeholder='Confirm Password'
                  />
                  <div>
                    <input type='checkbox' className='border border-gray-40 ' />
                    <span className='pl-3'>
                         I accept the <a className='text-gray-400 font-semibold'>Terms of Use</a> &<a className='text-gray-400 font-semibold'> Privacy Policy</a>
                    </span>
                  </div>
                <button className=' mt-4 bg-cyan-900 hover:bg-cyan-800  shadow-inner shadow-cyan-800 rounded-full h-10 font-bold text-white'>
                 Register Now
                </button>
                <PiAppleLogoLight
                  size={30}
                  className='mt-2 p-1 w-full bg-black text-white border-1 shadow-inner shadow-cyan-800  border-white rounded-full h-10 font-thin cursor-pointer'
                />
                <FcGoogle
                  size={30}
                  className=' p-1 w-full bg-white border-1  hover:bg-white  shadow-inner shadow-cyan-800  rounded-full h-10 font-bold cursor-pointer'
                />
                <h3 className='m-auto gap-6 text-md'>
                  Already logged in ?
                  <span className='pl-2 text-blue-700 cursor-pointer text-lg font-bold'>Login</span>
                </h3>
               </div>
              
             
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
