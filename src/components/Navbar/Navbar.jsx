import React from 'react';
// It's better to use NavLink for navigation to style the active link
import { Link, NavLink } from 'react-router-dom';
import Profile from './../Pages/Profile/Profile';

const Navbar = () => {
    return (
        <>
            <div className="navbar px-16 py-3 bg-white dark:bg-gray-800 shadow-lg">
                {/* Left Side: App Title */}
                <div className="flex-1">
                    <Link to="/" className=" text-2xl text-blue-600 dark:text-white text-bold">Social App</Link>
                </div>

                {/* Center: Navigation Links */}
                <div className="flex-1 hidden md:flex">
                    <ul className="menu menu-horizontal px-1 space-x-2">
                        <li><NavLink to="/posts" className="text-lg">Posts</NavLink></li>
                    </ul>
                </div>

                {/* Right Side: User Profile Dropdown */}
                <div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Social app navbar content"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><Link to="/profile" className="justify-between">Profile</Link></li>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/register">Register</Link></li>
                            <li><button>Log out</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;
