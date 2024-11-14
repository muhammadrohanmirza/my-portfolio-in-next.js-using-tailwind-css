"use client";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Typewriter from 'typewriter-effect';


const Hero = () => {
  return (
    
      <section className="text-gray-600 body-font ">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        Hello, I&apos;m
        <br className="hidden lg:inline-block" />
        <Typewriter
            options={{
            strings: ['Web Developer', 'Graphic Designer'],
            autoStart: true,
            loop: true,
            }}
        />
        </h1>
      <p className="mb-8 leading-relaxed">
      I&apos;m Muhammad Rohan Mirza! I&apos;m a Web Developer & Graphic Desigher based in Pakistan. 
      I&apos;m passionate about creating elegant and efficient solutions that seamlessly 
      integrate user-friendly experiences. I&apos;ve built websites leveraging cutting-edge 
      technologies to drive innovation and enhance business processes.
      </p>
      <div className="flex justify-center">
        <Link href='/Contact'>
        <button className="inline-flex text-white bg-blue-400 border-0 py-2 px-6 focus:outline-none hover:bg-blue-500 rounded text-lg">
          Contact
        </button>
        </Link>
        <Link href="/assests/My Resume .pdf" target='_blank'>
        <button className="inline-flex text-white bg-blue-400 border-0 ml-6 py-2 px-6 focus:outline-none hover:bg-blue-500 rounded text-lg">
          Dawnload CV
        </button>
        </Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
      <Image
        className="object-cover object-center  mx-auto w-[16rem] rounded-xl"
        alt="hero"
        width={700}
        height={700}
        src={require("../../../public/assests/WhatsApp Image 2024-08-05 at 14.18.39_21557967.jpg")}
      />
    </div>
  </div>
</section>

    
  )
}

export default Hero
