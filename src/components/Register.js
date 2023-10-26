import React from "react";
// react icons
import { FcGoogle } from "react-icons/fc";
// react-icons
import { PiAppleLogoLight } from "react-icons/pi";
// import link for linking another file
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="py-24 min-h-screen bg-gray-200">
      <div className="container mx-auto my-1">
        <div className="flex flex-col lg:h-[90vh] lg:flex-row w-10/12 lg:w-9/12 bg-cyan-500 rounded-xl mx-auto shadow-lg overflow-hidden">
          <div className="w-full lg:w-1/2 flex flex-col bg-auto bg-center bg-no-repeat">
            {/* creating image container */}
            <img
              className="sm:h-1/2 lg:h-screen items-center justify-center container"
              src="https://w0.peakpx.com/wallpaper/425/176/HD-wallpaper-cyan-windows-11-logo-windows-11.jpg"
              alt=""
            />
          </div>
          {/* creating from section */}
          <div className="w-full lg:w-1/2 py-9 px-20">
            <h3 className="text-3xl text-white font-bold mb-4 items-center justify-center text-center">
              SignUp
            </h3>
            <p className="mb-4">
              Create your account, It's free and only take a minute
            </p>

            <form action="" className="">
              {/* start form for registration component */}
              <div className="grid grid-cols-2 gap-5 text-xs ">
                <input
                  className="outline-none text-xs  flex border border-gray-200 py-1 px-2 rounded-md shadow-md shadow-cyan-900 "
                  type="text"
                  placeholder="First Name"
                />

                <input
                  className="outline-none  text-xs flex border border-gray-400 py-1 px-2 w-full rounded-md shadow-md shadow-cyan-900"
                  type="text"
                  placeholder="Last Name "
                />
              </div>
              <div className="mt-5 text-xs  grid grid-cols-1 gap-4 m-auto">
                <input
                  className="outline-none flex border border-gray-400 py-1 px-2 rounded-md shadow-md shadow-cyan-900"
                  type="text"
                  placeholder="Enter Your Email "
                />

                <input
                  className="outline-none flex border border-gray-400 py-1 px-2 rounded-md shadow-md shadow-cyan-900 "
                  type="password"
                  placeholder="password"
                />
                <input
                  className="outline-none flex border border-gray-400 py-1 px-2 rounded-md shadow-md shadow-cyan-900"
                  type="password"
                  placeholder="Confirm Password"
                />
                <div>
                  <input type="checkbox" className="border border-gray-40 " />
                  <span className="pl-3">
                    I accept the{" "}
                    <a className="text-gray-200 font-semibold">Terms of Use</a>{" "}
                    &
                    <a className="text-gray-200 font-semibold">
                      {" "}
                      Privacy Policy
                    </a>
                  </span>
                </div>
                <button className=" mt-4 bg-cyan-900 hover:bg-cyan-800  shadow-inner shadow-cyan-800 rounded-full h-10 font-bold text-white">
                  Register Now
                </button>
                <PiAppleLogoLight
                  size={30}
                  className="mt-2 p-1 w-full bg-black text-white border-1 shadow-inner shadow-cyan-800  border-white rounded-full h-10 font-thin cursor-pointer"
                />
                <FcGoogle
                  size={30}
                  className=" p-1 w-full bg-white border-1  hover:bg-white  shadow-inner shadow-cyan-800  rounded-full h-10 font-bold cursor-pointer"
                />
                <h3 className="m-auto gap-6 text-md">
                  Already logged in ?
                  <span className="pl-2 text-blue-700 cursor-pointer text-lg font-bold">
                    <Link to={"/login"}>Login</Link>
                  </span>
                </h3>
              </div>
            </form>
            {/* ending registration form */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
