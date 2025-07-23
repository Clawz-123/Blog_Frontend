import React from 'react';
import { FiBookOpen } from "react-icons/fi";
import { Link } from 'react-router-dom'; // needed for navigation

const Navigation = [
    { name: "Home", path: "/" },
    { name: "Post", path: "/post" },
    { name: "About", path: "/about" }
];

const Header = () => {
    return ( 
        <div className='flex justify-between items-center bg-blue-700 h-16 w-screen px-6'>
            {/* Logo */}
            <div className="flex items-center gap-2 text-white">
                <FiBookOpen className='text-3xl text-blue-300' />
                <span className="font-bold text-xl">BlogHub</span>
            </div>

            {/* Navigation */}
            <div className='flex gap-6 text-white'>
                {Navigation.map((nav) => (
                    <Link 
                        key={nav.name} 
                        to={nav.path} 
                        className="hover:text-blue-300 transition"
                    >
                        {nav.name}
                    </Link>
                ))}
            </div>

            {/*  */}
        </div>
    );
};

export default Header;
