"use client";
import Link from 'next/link';
import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { VscGithubAlt } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa6";
import Image from 'next/image';


const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font bg-gray-100">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <Image src={require("../../../public/assests/mylogo.jpg")}
       alt='logo'
        width={100}
         height={100} 
         className='w-[40px]'
         />
      <span className="ml-3 text-xl">Rohan Mirza</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2024 Rohan Mirza
    
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link href={"https://www.facebook.com/profile.php?id=61564957374355"} target='_blank' className="text-gray-500">
      <FaFacebookF className='text-3xl hover:text-[blue]' />
      </Link>
      <Link href={"https://x.com/MRohanmirza2007"} target='_blank' className="ml-3 text-gray-500">
      <IoLogoTwitter className='text-3xl hover:text-[blue]' />
      </Link>
      <Link href={"https://www.instagram.com/rohan_mirza_2007/?hl=en"} target='_blank' className="ml-3 text-gray-500">
      <FaInstagramSquare className='text-3xl hover:text-[#da805f]' />
      </Link>
      <Link href={"https://github.com/muhammadrohanmirza"} target='_blank' className="ml-3 text-gray-500">
      <VscGithubAlt className='text-3xl hover:text-[black]' />
      </Link>
      <Link href={"https://www.linkedin.com/in/muhammad-rohan-mirza/"} target='_blank' className="ml-3 text-gray-500">
      <FaLinkedin className='text-3xl hover:text-[blue]' />
      </Link>
    </span>
  </div>
</footer>

    </div>
  )
}

export default Footer;
