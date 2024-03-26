import React from 'react';
import Pakettiautot from './Autojen_data/Pakettiautot';
import MiniBussit from './Autojen_data/MiniBussit';
import { AiOutlineMenu, AiOutlineHome, AiOutlineMail } from 'react-icons/ai';
import { PiVan } from "react-icons/pi";
import { LiaTruckSolid, LiaCarSideSolid  } from "react-icons/lia";
import { TbCaravan } from "react-icons/tb";
import { GiForklift } from "react-icons/gi";




const Main = () => {
    return (
        <div className='fixed w-full h-screen flex justify-center items-center h-screen relative'>
            <img className='absolute inset-0 w-full h-full object-cover object-left' src="https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className='absolute inset-0 flex justify-center bg-white/50'>
                <div className=''>
                    <h1 className='text-4xl font-bold text-center text-[#001b5e] mt-12 mb-8'>Vuokra</h1>
                    <div className="flex">
                        <a href="#Pakettiautot"
                            className='w-[10%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <PiVan  size={24} />
                            <span className='pl-4'>Pakettiautot</span>
                        </a>
                        <a href="#HENKILÖAUTOT"
                            className='w-[15%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <LiaCarSideSolid  size={24} />
                            <span className='pl-4'>HENKILÖAUTOT</span>
                        </a>
                        <a href="#MiniBussit"
                            className='w-[15%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <PiVan  size={24} />
                            <span className='pl-4'>MINIBUSSIT</span>
                        </a>
                        <a href="#KUORMA-AUTOT"
                            className='w-[20%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <LiaTruckSolid  size={24} />
                            <span className='pl-4'>KUORMA-AUTOT</span>
                        </a>
                        <a href="#PERÄKÄRRYT"
                            className='w-[15%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <TbCaravan  size={24} />
                            <span className='pl-4'>PERÄKÄRRYT</span>
                        </a>
                        <a href="#HENKILÖNOSTIN"
                            className='w-[15%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <GiForklift  size={24} />
                            <span className='pl-4'>HENKILÖNOSTIN</span>
                        </a>
                        <a href="#MUUTTOLAATIKOT"
                            className='w-[15%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <PiVan  size={24} />
                            <span className='pl-4'>MUUTTOLAATIKOT</span>
                        </a>
                        <a href="#NETTIKAUPPAAN"
                            className='w-[15%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <PiVan  size={24} />
                            <span className='pl-4'>NETTIKAUPPAAN</span>
                        </a>
                    </div>
                    <Pakettiautot />
                </div>
            </div>
        </div>
    );
};

export default Main;
