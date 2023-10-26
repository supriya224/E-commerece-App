import React, { useContext } from "react";
// import link route for linking another file
import { Link } from "react-router-dom";
// import { BsPlus} from "react-icons/bs";
import { FcViewDetails, FcPlus } from "react-icons/fc";

// import add to cart component for fetching data from here.
import { CartContext } from "../contexts/CartContext";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  // console.log(product)

  // fetching some data from product
  const { id, image, category, title, price } = product;
  return (
    <div>
      <div className="mt-9 border border-[#e4e4e4] h-[300px mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full my-9 flex justify-center items-center">
          {/* image */}
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110 transition-all duration-300 ease-out"
              src={image}
              alt=""
            />
          </div>
        </div>
        {/* button */}
        <div
          className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center
         justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 "
        >
          <button onClick={() => addToCart(product, id)}>
            <div className="flex justify-center items-center text-white">
              <FcPlus className=" text-5xl shadow-lg shadow-green-300" />
            </div>
          </button>

          <Link to={`/product/${id}`}>
            <FcViewDetails className="text-sm w-12 h-12  bg-white flex justify-center items-center text-primary shadow-lg shadow-blue-800 " />
          </Link>
        </div>
      </div>
      {/* category and title */}
      <div>
        <div className="text-sm capitalize text-gray-500">{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="font-bold mb-1">{title}</h2>
        </Link>
        <div className="font-semibold">$ {price}</div>
      </div>
    </div>
  );
};

export default Product;
