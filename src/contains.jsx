
import { NavLink } from "react-router-dom"
import image from "../src/IMG/TV.png"
function Contains() {
    return <>
    <div>
        <div>
            <div class="sm:flex-row sm:flex justify-around  sm:items-center  ml-[10px] mt-[120px]">
                <div class="w-[500px] pt-30">
                    <h1 class="pb-[10px] font-bold text-4xl ">Lorem ipsum dolor sit amet consectetur adipisicing </h1>
                    <p className="">Hi, I'm a passionate  front-end developer who enjoys creating beautiful and functional websites using modern tools like React and Tailwind CSS Feel free to reach out via the form or contact me directly.</p> 
                    <NavLink to="/about">
                        <button className="bg-green-900 text-white sm:px-10 px-4 py-2 rounded-lg mt-4 sm:ml-0 ml-28">Expolre More</button>
                    </NavLink>
                </div>
                <img className="sm:w-[300px] w-[300px] sm:h-[250px] h-[300px] sm:ml-0 ml-6 mt-2 sm:rounded-lg  rounded-lg " src={image} alt="" />
            </div>
        </div>
    </div>
    
    
    
    </>
    
}
export default Contains