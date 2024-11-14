import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-10">
      <h1 className=" underline text-5xl font-medium title-font hover:text-blue-500">
        My Projects
      </h1>
    </div>
    <div className="flex cursor-pointer ">

      {/* Projects */}
      <div className=" sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full "
            src={require("../../../public/assests/projects/project 1.jpg")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              The ToDo List Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            ToDo List
            </h1>
            <p className="leading-relaxed">
            This project is designed for catering business owners to help them efficiently manage their tasks and streamline operations.
            </p>
            <p className="leading-relaxed text-blue-500 hover:underline">
              <Link href={"https://todo-list-45mv6sudk-rohan-mirzas-projects.vercel.app"} target='_blank'>
              View Projects..
              </Link>
            </p>
            <p className="leading-relaxed text-blue-500 hover:underline">
              <Link href={"https://github.com/muhammadrohanmirza/Todo-List-in-react.js"} target='_blank'>
              View Code..
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className=" sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full "
            src={require("../../../public/assests/projects/project 2.png")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              The Analog Clock
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Analog Clock
            </h1>
            <p className="leading-relaxed">
            I have created a project for those who want to build or enhance an analog clock.
            </p>
            <p className="leading-relaxed text-blue-500 hover:underline">
              <Link href={"https://analog-clock-ahukabhtc-rohan-mirzas-projects.vercel.app"} target='_blank'>
              View Projects..
              </Link>
            </p>
            <p className="leading-relaxed text-blue-500 hover:underline">
              <Link href={"https://github.com/muhammadrohanmirza/Analog-clock"} target='_blank'>
              View Code..
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="flex   cursor-pointer">
      {/* Projects */}
      <div className=" sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full"
            src={require("../../../public/assests/projects/project 3.png")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              The Calculator Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Calculator
            </h1>
            <p className="leading-relaxed">
            This project is for those who own a catering etc business and need an easy way to handle their calculations.
            </p>
            <p className="leading-relaxed text-blue-500 hover:underline">
              <Link href={"https://calculator-17qzju7a8-rohan-mirzas-projects.vercel.app"} target='_blank'>
              View Projects..
              </Link>
            </p>
            <p className="leading-relaxed text-blue-500 hover:underline">
              <Link href={"https://github.com/muhammadrohanmirza/simple-calculator-to-use-browser-s-"} target='_blank'>
              View Code..
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className=" sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full"
            src={require("../../../public/assests/projects/project 4.png")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              The Resume Builder Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Resume Builder
            </h1>
            <p className="leading-relaxed">
            This project is for those who want to create their resumes, so create your custom resume.
            </p>
            <p className="leading-relaxed text-blue-500 hover:underline">
              <Link href={"https://milestone-5-6odujwd4x-rohan-mirzas-projects.vercel.app/"} target='_blank'>
              View Projects..
              </Link>
            </p>
            <p className="leading-relaxed text-blue-500 hover:underline">
              <Link href={"https://github.com/muhammadrohanmirza/Hackathon-Milestones?tab=readme-ov-file"} target='_blank'>
              View Code..
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>

    </div>
  )
}

export default page;
