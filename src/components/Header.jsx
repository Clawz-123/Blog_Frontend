import React, { useState } from 'react';
import { FiBookOpen, FiMenu, FiX } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Navigation = [
    { name: "Home", path: "/" },
    { name: "Post", path: "/post" },
    { name: "About", path: "/about" }
];

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate()

    return (
        <header className='w-full border-b border-gray-200'>
            <div className='flex justify-between items-center h-16 px-6 md:px-10'>
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <FiBookOpen className='text-3xl text-blue-700' />
                    <span className="font-bold text-xl">BlogHub</span>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl text-blue-700">
                        {menuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>

                {/* Desktop Navigation */}
                <div className='hidden md:flex gap-8 text-gray-600 font-medium'>
                    {Navigation.map((nav) => (
                        <NavLink
                            key={nav.name}
                            to={nav.path}
                            className={({ isActive }) =>
                                `transition ${isActive ? 'text-blue-700' : 'hover:text-blue-700'
                                }`
                            }
                        >
                            {nav.name}
                        </NavLink>
                    ))}
                </div>

                {/* Desktop Auth Buttons */}
                <div className="hidden md:flex gap-4">
                    <button 
                    onClick={()=> navigate('/login')}
                    className="px-6 py-2 text-black rounded-xl hover:bg-amber-600 hover:text-white cursor-pointer transition duration-200 font-medium hover:shadow-lg">
                        Login
                    </button>
                    <button 
                    onClick={()=> navigate('/signup')}
                    className="px-6 py-2 text-white bg-blue-700 rounded-xl hover:bg-blue-800 cursor-pointer transition duration-200 font-medium hover:shadow-lg">
                        Sign Up
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden flex flex-col gap-4 px-6 pb-4 bg-white shadow-sm">
                    {Navigation.map((nav) => (
                        <NavLink
                            key={nav.name}
                            to={nav.path}
                            className={({ isActive }) =>
                                `transition ${isActive ? 'text-blue-700' : 'hover:text-blue-700'
                                }`
                            }
                            onClick={() => setMenuOpen(false)}
                        >
                            {nav.name}
                        </NavLink>
                    ))}
                    <button className="w-full text-left text-black hover:bg-amber-600 hover:text-white rounded-md px-4 py-2 transition font-medium cursor-pointer">
                        Login
                    </button>
                    <button className="w-full text-left text-white bg-blue-700 hover:bg-blue-800 rounded-md px-4 py-2 transition font-medium cursor-pointer">
                        Sign Up
                    </button>
                </div>
            )}
        </header>
    );
};

export default Header;
