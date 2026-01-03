import { NavLink } from "react-router-dom"
function Navbar() {

    const getLinkClass = ({ isActive }) => 
    `font-medium transition-opacity duration-200 ${isActive ? "opacity-100 border-b" : "opacity-60 hover:opacity-100"}`;
    return (
        <>
            <div className="flex justify-between lg:justify-around px-3 md:px-10 py-4 items-center container mx-auto lg:w-3/4">
                <div className="text-white select-none bg-slate-950 px-4 py-1 rounded-md font-bold text-xl cursor-default scale-80 md:scale-100">
                    Credo
                </div>
                <div className="text-md">
                    <ul className="flex gap-5 md:gap-10">
                        <NavLink className={getLinkClass} to="/"><li>Home</li></NavLink>
                        <NavLink className={getLinkClass} to="/dashboard"><li>Dashboard</li></NavLink>
                        <NavLink className={getLinkClass} to="/about"><li>About</li></NavLink>
                        
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Navbar