import React from 'react'

const About = () => {
  return (
    <>
      <div className="container mx-auto px-5 md:px-0 md:w-3/4 text-2xl md:text-3xl text-slate-900 font-bold md:mt-5 mb-3">About</div>
      <div className='container mx-auto px-5 md:px-0 md:w-3/4 flex flex-col gap-4 md:gap-6 text-[16px] text-slate-700'>
        <div className="flex flex-col gap-3 text-sm md:text-base">
          <p>Credo is a client-side credential management application built to help users organize and manage their login details in a simple and structured way.</p>
          <p>The goal of Credo is to provide a clean, distraction-free interface that makes it easy to view, add, and manage login information without unnecessary complexity.</p>
          <p>Designed with simplicity in mind, Credo focuses on usability, speed, and clarity, making it suitable for everyday credential organization.</p>
        </div>
        <hr className='border-[#0000002f]' />
        <div className="flex flex-col gap-3 text-sm md:text-base">
          <h2 className='text-xl md:text-2xl font-bold'>What Credo Offers</h2>
          <ul className='flex flex-col md:flex-row gap-3 list-disc md:flex'>
            <div className='bg-[#ffffffcd] shadow-[0px_0px_7px_0px_rgba(0,0,0,0.1)] rounded-lg py-5 px-10 flex flex-1 flex-col gap-3'>
              <li>Centralized management of login details</li>
              <hr className='border-[#0000002f]' />
              <li>Quick access to saved credentials</li>
            </div>
            <div className='bg-[#ffffffcd] shadow-[0px_0px_7px_0px_rgba(0,0,0,0.1)] rounded-lg p-5 px-10 flex flex-1 flex-col gap-3'>
              <li>Clean and minimal user interface</li>
              <hr className='border-[#0000002f]' />
              <li>Simple workflow for adding, editing, and removing entries</li>
            </div>
          </ul>
        </div>
        <div className="flex flex-col md:gap-3">
          <h2 className='text-xl md:text-2xl font-bold'>Tech Stack</h2>
          <p className='text-sm md:text-base'>React · Tailwind CSS · JavaScript</p>
        </div>
        <div className="my-4 flex flex-col gap-2">
          <h2 className='text-xl md:text-2xl font-bold'>Credits</h2>
          <p className='text-sm md:text-base'>Designed & Developed by Jnanadeep
          </p>
          <div className='flex gap-2'>
            <a href="https://github.com/jnanadeep17" target="_blank">
              <img src="/src/assets/github-icon.svg" alt="github-icon" className='w-7  hover:cursor-pointer' />
            </a>
            <a href="https://www.linkedin.com/in/jnanadeep-r-3b924b384/" target="_blank">
              <img src="/src/assets/linkedin-icon.svg" alt="linkedin-icon" onClick={() => alert("Eeyy")} className='w-7 rounded-[5px] bg-white hover:cursor-pointer' />
            </a>
          </div>

        </div>
      </div>
    </>
  )
}

export default About