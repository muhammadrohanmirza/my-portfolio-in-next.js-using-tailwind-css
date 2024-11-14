import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
  <div className="lg:max-w-sm lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center  mx-auto w-[16rem] rounded-xl	"
        alt="hero"
        width={700}
        height={700}
        src={require("../../../public/assests/WhatsApp Image 2024-08-05 at 14.18.39_21557967.jpg")}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        About Me:
      </h1>
      <h3 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        Get to know me!
      </h3>
      <p className="mb-8 leading-relaxed">
      I am a passionate Web Developer and Graphic Designer with a strong background in Web Development, I have been crafting digital experiences for 5 years. 
      </p>
      <p className="mb-5 leading-relaxed">
      My journey in IT began in 2021 since then, I&apos;ve had the privilege to work on diverse projects, allowing me to refine my skills and approach to problem-solving. 
      </p>
      <p className="mb-5 leading-relaxed">
      I thrive on turning complex ideas into elegant solutions that not only meet user needs but also create lasting impacts.      
      </p>
      <div className="flex justify-center">
        <Link href={"/assests/My Resume .pdf"} target='_blank'>
        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
          View CV
        </button>
        </Link>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default page
