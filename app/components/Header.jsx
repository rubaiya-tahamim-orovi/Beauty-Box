import React from 'react';
// import { IoMenu } from "react-icons/io5";
import { RiSearchAiLine } from "react-icons/ri";
import {  BsFillGridFill } from "react-icons/bs";
import { IoPersonAdd } from "react-icons/io5";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import { IoMdCart } from 'react-icons/io';

// to find catagory box or 4 box type element in react icons search for 'grid' or 'rectangle'

const Header = () => {
    return (
        <div className='grid grid-cols-4 items-center justify-center'>
            {/* first div here */}
           <div className='col-span-1 flex items-center  gap-15'>
             {/* <h1 className='text-3xl text-[#C24256]'> <IoMenu /> </h1> */}
            <h1 className='font-custom bg-radial from-[#C24256] 
      from-4% to-[#C24256B3] to-70% w-fit text-transparent bg-clip-text text-3xl'> Beauty Box </h1>
           </div>
          
          {/* second div */}
          <div className='col-span-2 flex justify-center '>
            <form className='w-full flex  items-center  border border-[#C24256] 
            rounded'>
              <div className='flex items-center min-w-fit px-5 gap-2 bg-[#C24256] py-2 rounded-l'>
                <h1 className='text-[#FACBAF]'> <BsFillGridFill /> </h1>
                <h1 className='text-[#FACBAF] font-semibold'> All Catagories </h1>
                <h1 className='text-[#FACBAF]'><FaCaretDown /></h1>
              </div>
                  <input type="search" name="" id="" placeholder='Search Your Products...' className='outline-none
                   w-full  placeholder:text-[#C24256B3] px-5 py-2 ' />
                  <button  className='text-2xl text-[#FACBAF] 
                   bg-[#C24256] px-5 py-2 rounded-r rounded-l-3xl'> <RiSearchAiLine /> </button>
            </form>
          </div>

          {/* third div */}
          <div className='col-span-1 flex justify-end gap-3 items-center w-full'>
            <span className=' flex items-center bg-[#C24256] py-2 px-5 text-[#FACBAF] rounded-full
            gap-2 '> <span className='text-xl'><IoPersonAdd /></span>
             <span className='font-semibold'> Sign Up  </span> </span>
            <span className='bg-[#C24256] py-2 px-5 text-[#FACBAF] rounded-full flex
            items-center gap-2'>
              <span className='text-xl'> <FaCartShopping /> </span>
              <span className='font-semibold'> Cart </span>

              </span>
          </div>

        </div>
    );
};

export default Header;