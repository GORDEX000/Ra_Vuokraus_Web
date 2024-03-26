import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineHome, AiOutlineMail } from 'react-icons/ai';
import { MdCarRental } from "react-icons/md";
import { IoPerson } from "react-icons/io5";


const NavBar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div>
            <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden' />
            {nav ? (
                <div className='fixed w-full h-screen bg-white/90 flex-col justify-center items-center z-20'>
                    <a onClick={handleNav} href="#main"
                        className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <AiOutlineHome size={20} />
                        <span className='pl-4'>Home</span>
                    </a>
                    <a onClick={handleNav} href="#vuokra"
                        className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <MdCarRental size={20} />
                        <span className='pl-4'>vuokra</span>
                    </a>
                    <a onClick={handleNav} href="#mail"
                        className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <AiOutlineMail size={20} />
                        <span className='pl-4'>Ota Yhteytta</span>
                    </a>
                    <a onClick={handleNav} href="#tekijat"
                        className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <IoPerson size={20} />
                        <span className='pl-4'>Tekijat</span>
                    </a>
                </div>
            ) : (
                ''
            )}
            <div className='md:block hidden fixed top-[25%] z-10'>
                <div className='flex flex-col'>
                    <a href="#main" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursore-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineHome size={20}/>
                    </a>
                    <a href="#vuokra" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursore-pointer hover:scale-110 ease-in duration-300'>
                        <MdCarRental size={20}/>
                    </a>
                    <a href="#mail" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursore-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineMail size={20}/>
                    </a>
                    <a href="#tekijat" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursore-pointer hover:scale-110 ease-in duration-300'>
                        <IoPerson size={20}/>
                    </a>
                </div>
            </div>






        </div>
    );
};

export default NavBar;
