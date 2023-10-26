import React from "react";
// react-icons
import { FcGoogle } from "react-icons/fc";
// react-icons
import { PiAppleLogoLight } from "react-icons/pi";
// // import link for linking another file
import { Link } from "react-router-dom";
// import SignUp from './SignUp';
function Login() {
  return (
    <>
      <div className="py-28 min-h-screen bg-gray-200">
        <div className="container mx-auto">
          <div className="flex flex-col lg:h-[80vh] bg-blue-300 lg:flex-row w-10/12 lg:w-9/12  rounded-xl mx-auto shadow-lg overflow-hidden">
            <div className="w-full md:3/4 lg:w-1/2 flex flex-col bg-auto bg-center bg-no-repeat">
              {/* creating image container */}
              <img
                className="sm:h-1/2 lg:h-screen items-center justify-center container"
                src="https://img.freepik.com/premium-photo/dark-blue-3d-product-display-podium-abstract-asymmetrical-background-photography-advertisement_611870-2028.jpg"
                alt=""
              />
            </div>
            {/* creating from section */}
            <div className="w-full lg:w-1/2 py-16 px-12">
              <h3 className="text-3xl mb-4 items-center justify-center text-center font-bold text-blue-900 ">
                Login
              </h3>
              <p className="mb-4 text-center text-white">
                Login your existing account
              </p>

              <form action="" className="">
                {/* start form for registration component */}
                <div className="grid gap-5  ">
                  <input
                    className="outline-none flex border border-gray-400 py-1 px-2  rounded-md shadow-md shadow-blue-900"
                    type="text"
                    placeholder="First Name"
                  />
                </div>
                <div className="mt-5 grid grid-cols-1 gap-4 m-auto">
                  <input
                    className="outline-none flex border border-gray-400 py-1 px-2  rounded-md shadow-md shadow-blue-900 "
                    type="text"
                    placeholder="Enter Your Email "
                  />

                  <input
                    className="outline-none flex border border-gray-400 py-1 px-2  rounded-md shadow-md shadow-blue-900 "
                    type="password"
                    placeholder="password"
                  />

                  <button className=" mt-4 bg-blue-500 hover:bg-blue-800  shadow-inner shadow-blue-800 rounded-full h-10 font-bold text-white">
                    Registration
                  </button>
                  <PiAppleLogoLight
                    size={30}
                    className="mt-2 p-1 w-full bg-black text-white border-1 shadow-inner shadow-blue-800 border-white rounded-full h-10 font-thin cursor-pointer"
                  />
                  <FcGoogle
                    size={30}
                    className=" p-1 w-full bg-white border-1  hover:bg-white  shadow-inner shadow-blue-800  rounded-full h-10 font-bold cursor-pointer"
                  />
                  <h3 className="m-auto gap-6">
                    Not a Member ?
                    <span className="pl-2 text-cyan-900 cursor-pointer text-lg font-bold">
                      <Link to={"/register"}>SignUp</Link>
                    </span>
                  </h3>
                </div>
              </form>
              {/* end login form */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
