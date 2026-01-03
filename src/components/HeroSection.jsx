import { NavLink } from "react-router-dom"
const HeroSection = () => {
  return (
    <>
      <div className="relative">
        <div className="container mx-auto text-center my-7 md:my-0 md:h-80 items-center flex flex-col justify-center gap-5">
          <div className="bg-[#ffffffcd] px-5 py-1 rounded-full shadow-[0px_4px_10px_0px_rgba(0,0,0,0.1)] w-fit flex items-center gap-2">
            <span><img src="/src/assets/live-dot-icon.svg" alt="live-dot-icon" className="w-3" /></span>
            <span>V1.0 is now live</span>
          </div>
          <h1 className="text-3xl px-3 font-medium text-slate-900 md:text-[50px]">Manage Your Logins in One Place</h1>
          <div className="text-[16px] px-3 md:text-xl text-slate-600 text-xl">
            <p>Credo helps you store, manage and protect all your passwords in one place.
            </p>
            <p>Designed for simplicity, built for speed.</p>
          </div>
        </div>
        <div className="flex gap-4 justify-center flex-wrap">
          <div className="bg-[#ffffffcd] p-5 rounded-2xl shadow-[0px_4px_10px_0px_rgba(0,0,0,0.1)] flex items-center gap-2">
            <img src="/src/assets/folder-icon.svg" alt="" className="w-10 h-10 p-2 rounded-lg bg-[#fce7f3]" />
            <div className='text-[14px]'>
              <h4 className='font-medium'>Local Storage</h4>
              <p>Data stays on your device.</p>
            </div>

          </div>
          <div className="bg-[#ffffffcd] p-5 rounded-2xl shadow-[0px_4px_10px_0px_rgba(0,0,0,0.1)] flex items-center gap-2">
            <img src="/src/assets/shield-icon.svg" alt="" className="w-10 h-10 p-2 rounded-lg bg-[#e7fce7]" />
            <div className='text-[14px]'>
              <h4 className='font-medium'>Quick Access</h4>
              <p>Get login details instantly.</p>
            </div>
          </div>
          <div className="bg-[#ffffffcd] p-5 rounded-2xl shadow-[0px_4px_10px_0px_rgba(0,0,0,0.1)] flex items-center gap-2">
            <img src="/src/assets/dashboard-icon.svg" alt="" className="w-10 h-10 p-1 rounded-lg bg-[#ede9fe]" />
            <div className='text-[14px]'>
              <h4 className='font-medium'>Centralized Manager</h4>
              <p>All credentials in one place.</p>
            </div>
          </div>
        </div>
        <div className="container mx-auto text-center mt-10">
          <NavLink to="/dashboard">
          <button className="bg-slate-950 py-3 px-5 text-sm md:text-base font-bold text-white rounded-full hover:cursor-pointer" >Go to Dashboard →</button>
          </NavLink>
        </div>
      </div>

      <footer className="flex justify-center items-center text-[14px] font-medium text-slate-500 gap-2 mt-7 md:mt-24">

        <div className="flex items-center gap-1">
          Designed & Developed by Jnanadeep
        </div>
        <p>|</p>
        <a href="https://github.com/jnanadeep17" target="_blank">Github</a>
        
      </footer>
      
      
    </>
  )
}

export default HeroSection