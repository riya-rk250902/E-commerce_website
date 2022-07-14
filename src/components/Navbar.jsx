import React,{useState} from 'react'


const Navbar = () => {
  const {nav, setNav} =useState()
  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
            <h1 className='text-3xl font bold mr-4 sm:text-4xl'>Shop.com</h1>
            <ul className='hidden md:flex'>
                <li>HOME</li>
                <li>OUR COLLECTIONS</li>
                <li>PRODUCTS</li>
            </ul>
        </div>
        <div className='hidden md:flex pr-4'>
          <button className='border-none bg-transparent text-black mr-4'>
            Sign-In</button>
          <button classname='px-8 py-3'>Sign-up</button>
           </div>
        </div>
        
    </div>
  );
};

export default Navbar