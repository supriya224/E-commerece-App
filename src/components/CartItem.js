import React, { useContext } from "react";
// // import link for linking another file
import { Link } from "react-router-dom";
// react-icons
import { IoIosAdd, IoMdClose, IoMdRemove } from "react-icons/io";
// // import cartcontext for fetching some data using props
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {
  // desturcture of all item in to cart items
  const { id, title, price, image, amount } = item;
  // cart context data fetching
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);

  return (
    <div className="flex gap-x-4 py-1 lg:px-6 border-b border-gray-500 w-full font-light text-gray-600">
      <div className="w-full min-h-[150px] flex items-center gap-x-6 ">
        {/* image */}
        <Link to={`/product/${id}`}>
          <img className="max-w-[50px]" src={image} alt="" />
        </Link>
        {/* remove and title item */}

        <div className=" w-full flex flex-col">
          <div className="flex justify-between mb-2">
            <Link
              to={`/product/${id}`}
              className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
            >
              {title}
            </Link>
            <div className="text-2xl cursor-pointer">
              <IoMdClose
                className="text-gtay-500 hover:text-red-500 transition"
                onClick={() => removeFromCart(id)}
              />
            </div>
          </div>

          <div className=" flex gap-x-1 h-[36px] text-sm">
            {/* quantity */}
            <div className="flex flex-1 max-w-[100px] items-center  h-full border cursor-pointer text-primary font-medium ">
              {/* decrease datat */}
              <div
                className="flex flex-1 justify-center items-center text-primary font-medium bg-blue-400 h-full"
                onClick={() => decreaseAmount(id)}
              >
                <IoMdRemove className=" items-center" />
              </div>
              {/* amount */}
              <div className="h-full justify-center items-center flex px-2  ">
                {amount}
              </div>
              {/* increase datat */}
              <div
                className="flex flex-1 justify-center items-center cursor-pointer bg-cyan-500 h-full"
                onClick={() => increaseAmount(id)}
              >
                <IoIosAdd />
              </div>
            </div>

            <div className="flex-1 flex justify-around items-center text-primary font-medium">
              ${price}
            </div>

            <div className="flex-1 flex justify-end items-center text-primary font-medium">
              ${`$ ${parseFloat(price * amount).toFixed(2)}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
