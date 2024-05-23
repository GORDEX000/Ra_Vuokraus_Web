import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Main = () => {
    return (
        <div id='main' className='flex justify-center items-center h-screen'>
            <img className='absolute inset-0 w-full h-full object-cover object-left' src="https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className='absolute inset-0 flex justify-center items-center bg-white/50'>
                <div className='text-center'>
                    <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>Ra Vuokraus</h1>
                    <h2 className='flex justify-center items-center sm:text-3xl text-2xl pt-4 text-gray-800'>
                    {' '}
                        <TypeAnimation
                            sequence={[
                                'Vuokra',
                                1000,
                                'Nopea',
                                1000,
                                'Helppo',
                                1000,
                            ]}
                            wrapper="div"
                            cursor={true}
                            repeat={Infinity}
                            style={{ fontSize: '1em', paddingLeft: '5px' }}
                        />
                    </h2>
                    <div className='flex justify-center pt-6 max-w-[200] w-full'>
                        <FaTwitter className='cursor-pointer mr-4' size={20} />
                        <FaFacebook className='cursor-pointer mr-4' size={20} />
                        <FaInstagram className='cursor-pointer' size={20} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
