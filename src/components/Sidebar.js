// import useContext
import React, { useContext } from "react";
// link react-router-dom
import { Link } from "react-router-dom";
// import react icons
import { IoMdArrowForward } from "react-icons/io";
// react-icons
import { FiTrash } from "react-icons/fi";

// import comonent
import CartItem from "../components/CartItem";
// import sidebar context
import { SidebarContext } from "../contexts/SidebarContext";
// import cart context for
import { CartContext } from "../contexts/CartContext";

function Sidebar() {
  // fetch data from sidebarcontext
  const { isOpen, handleClose } = useContext(SidebarContext);
  // fetch data from cartcontext
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full h-full  bg-gray-100 fixed top-0 shadow-2xl md:w-[35vw]
     xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px] overflow-y-auto`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        {/* shoppingcart amount */}
        <div className="uppercase text-sm font-semibold">
          Shopping Bag({itemAmount})
        </div>
        <div
          onClick={handleClose}
          className=" cursor-pointer flex w-8 h-8 justify-between items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>

      <div className="flex flex-col gap-y-3 h-[520px] lg:h-[640px] overflow-y-auto">
        {cart.map((item, id) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div className="h-auto gap-y-3 flex flex-col py-4 mt-4">
        <div className="flex w-full justify-between items-center">
          {/* total */}
          <div className="uppercase font-semibold">
            <span>Total:</span>${parseFloat(total).toFixed(2)}
          </div>
          {/* clear cart icon */}
          <div className="py-4 bg-red-600 w-12 h-12 flex justify-center items-center text-lg text-white cursor-pointer">
            <FiTrash onClick={clearCart} />
          </div>
        </div>
        {/* view cart page */}
        <Link
          className="bg-gray-300  text-center w-full text-primary font-medium p-4"
          to={"/"}
        >
          View Cart
        </Link>
        {/* checkout page */}
        <Link
          className="bg-gray-300   text-center w-full text-primary font-medium  p-4"
          to={"/"}
        >
          Checkout
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
