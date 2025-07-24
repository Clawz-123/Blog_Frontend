import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { IoSearchOutline } from "react-icons/io5";

const Home = () => {
    return (
        <div>
            <Header />
            {/* Main div */}
            <div className='flex justify-center items-center h-90 flex-col mb-10'>
                {/* Text Header */}
                <div>
                    <p className='text-gray-800 text-6xl font-bold'>Discover Amazing  <span className='text-blue-800'> Stories </span></p>
                    <div className=' w-[650px] gap-3 flex mt-5 text-center'>

                        <p className='text-gray-500 text-xl'>Join our community of writers and readers sharing insights, tutorials, and stories that matter. Stay updated with the latest trends in technology, design, and business.</p>
                    </div>
                    {/* Search Bar */}
                    <div className='mt-8 flex justify-center'>
                        <div className="flex items-center gap-2 border border-gray-300 rounded-sm px-4 py-2 w-[400px] focus-within:ring-2 focus-within:ring-blue-700  transition duration-200">
                            <IoSearchOutline className="text-gray-500 text-xl" />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                className="outline-none w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Home
