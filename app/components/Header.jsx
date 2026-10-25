import React from 'react';
import { IoMenu } from "react-icons/io5";
import { RiSearchAiLine } from "react-icons/ri";

const Header = () => {
    return (
        <div className='grid grid-cols-3 items-center justify-center'>
            {/* first div here */}
           <div className='col-span-1 flex items-center  gap-15'>
             <h1 className='text-3xl text-[#C24256]'> <IoMenu /> </h1>
            <h1 className='font-custom bg-radial from-[#C24256] 
      from-4% to-[#C24256B3] to-70% w-fit text-transparent bg-clip-text text-3xl'> Beauty Box </h1>
           </div>
          
          {/* second div */}
          <div className='col-span-1 flex justify-center'>
            <form className='w-full flex items-center  border border-[#C24256]  
            rounded'>
                  <input type="search" name="" id="" placeholder='Search Your Products...' className='outline-none
                   w-full placeholder:text-[#C24256B3] px-5 py-2 ' />
                  <button  className='text-2xl text-[#FACBAF] 
                   bg-[#C24256] px-5 py-2 rounded-r rounded-l-3xl'> <RiSearchAiLine /> </button>
            </form>
          </div>

          {/* third div */}
          <div className='col-span-1 flex justify-around'>
            <p>hello world</p>
          </div>

        </div>
    );
};

export default Header;