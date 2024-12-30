import { NavLink, useLocation } from 'react-router-dom'
import { IoMdCart } from "react-icons/io";
import { GrFavorite } from "react-icons/gr";

const Navbar = () => {
    const location = useLocation()
    const isHomePage = location.pathname === "/";

    const list = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/statistics'>Statistics</NavLink></li>
        <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
    </>
    return (
        <div className={`p-4 navbar font-medium ${isHomePage ? ' bg-[#9538E2] text-white rounded-t-xl' : ''}`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {list}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        list
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-ghost btn-circle text-2xl">
                    <IoMdCart></IoMdCart>
                </button>
                <button className="btn btn-ghost btn-circle text-2xl">
                    <GrFavorite />
                </button>
            </div>
        </div>
    )
}

Navbar.propTypes = {}

export default Navbar