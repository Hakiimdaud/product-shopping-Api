import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const HandleIsOpen = () => {
    setIsOpen(true);
  };
  const HandleIsClosed = () => {
    setIsOpen(false);
  };



    const cout = useSelector((e)=>e.newCounter.item)

    
  return (
    <>
      <div className="flex items-center justify-between px-10 mt-4">
        <h1 className="text-2xl font-bold">JM9</h1>

        {/* Desktop Menu */}
        <ul className="sm:flex gap-10 text-2xl font-semibold hidden">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </ul>
        <button><i className="fa-solid fa-cart-plus sm:block hidden relative"><p className="absolute -mt-12 ml-2">({cout})</p></i></button>

        



        {/* Mobile Menu */}
        <div style={{ display: isOpen ? "block" : "none" }}
          className="sm:hidden pl-4 text-2xl font-semibold bg-green-900 text-white text-center absolute top-16 left-0 w-full pt-16 space-y-8 pb-10">
        <ul className="grid grid-cols-1">
          <NavLink onClick={HandleIsClosed} to="/">Home</NavLink>
          <NavLink onClick={HandleIsClosed} to="/about">About</NavLink>
          <NavLink onClick={HandleIsClosed} to="/contact">Contact</NavLink>
        </ul>
        <button ><i className="fa-solid fa-cart-plus relative"><p className="absolute -mt-12 ml-2">({cout})</p></i></button>
        </div>

        {/* Buttons */}
        <button style={{ display: isOpen ? "none" : "block" }}onClick={HandleIsOpen} className="sm:hidden">
          <i className="fa-solid fa-bars sm:hidden"></i></button>

        <button
          style={{ display: isOpen ? "block" : "none" }}onClick={HandleIsClosed}className="sm:hidden">
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
    </>
  );
}

export default Header;
