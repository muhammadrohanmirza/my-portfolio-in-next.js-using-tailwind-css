"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { WiCloudDown } from "react-icons/wi";

const Navbar = () => {
  return (
    <div className="text-gray-600 body-font bg-gray-100 z-50 sticky top-0">
      <header className="text-gray-600 body-font bg-gray-100 sticky top-0">
       <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <Image 
      src={require("../../../public/assests/mylogo.jpg")}
       alt='logo' 
       width={100} 
       height={100} 
       className='w-[40px]'
       />
      <span className="ml-3 text-xl">Rohan Mirza</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href={"/"} className="mr-5 hover:text-blue-600">Home</Link>
      <Link href={"/About"} className="mr-5 hover:text-blue-600">About</Link>
      <Link href={"/Project"} className="mr-5 hover:text-blue-600">Projects</Link>
      <Link href={"/Contact"} className="mr-5 hover:text-blue-600">Contact</Link>
    </nav>
    <Link href="/assests/My Resume .pdf" target='_blank'>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-blue-200 rounded text-base mt-4 md:mt-0">
      Dawnload CV
      <WiCloudDown className='text-xl ml-2' />
    </button>
    </Link>
  </div>
</header>
    </div>
  )
}

export default Navbar;
