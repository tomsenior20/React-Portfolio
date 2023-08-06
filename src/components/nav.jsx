import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen)
    }
    // Handle Mobile Link Click - Close Nav on Click
    const handleMobileLinkClick = () => {
        setMenuOpen(false)
    }
    return (
        <nav className="App top-0 fixed flex w-full justify-between p-5 items-center h-[100px]">
            <div className="flex justify-start w-4/5 sm:w-2/5 p-3">
                <h1 className="text-xl text-white">Tom Senior</h1>
            </div>
            <div className="hidden sm:block w-3/5 p-3">
                <ul className="hidden md:flex flex-row justify-around">
                    <li>
                        <Link to='/' className="text-lg text-white">Home</Link>
                    </li>
                    <li>
                        <Link to='/about' className="text-lg text-white">About</Link>
                    </li>
                    <li>
                        <Link to='/contact' className="text-lg text-white">Contact</Link>
                    </li>
                </ul>
            </div>
            {/* Mobile Bars */}
            <div onClick={handleMenuToggle} className="w-1/5 sm:w-3/5 flex md:hidden items-center justify-end z-10 text-white px-6">
                {!menuOpen ? <FaBars /> : <FaTimes />}
            </div>
            {/* Mobile Menu */}
            <ul className={!menuOpen ? "hidden" : "absolute top-0 left-0 w-full flex bg-[#fcba03] flex-col h-screen justify-center items-center"}>
                {/* Add your mobile menu items here */}
                <li>
                    <Link to='/' className="text-lg text-white" onClick={handleMobileLinkClick} >Home</Link>
                </li>
                <li>
                    <Link to='/about' className="text-lg text-white" onClick={handleMobileLinkClick}>About</Link>
                </li>
                <li>
                    <Link to='/contact' className="text-lg text-white" onClick={handleMobileLinkClick}>Contact</Link>
                </li>
                {/* Add more items as needed */}
            </ul>
        </nav>
    );
}
