import { NavLink } from "react-router-dom"

function Header() {

    
    return <>
    <div className="flex items-center justify-between px-10 mt-4">
        <h1 className="text-2xl font-bold">JM9</h1>
        <ul className="flex gap-10 text-2xl font-semibold">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        </ul>
        <i className="fa-solid fa-cart-plus"></i>
    </div>    
    
    </>
    
}
export default Header