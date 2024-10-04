import React from 'react'

const NavBar = () => {
  return (
    <nav className='bg-gradient-to-r from-gray-900 to-gray-700 bg-opacity-80 backdrop-blur-md text-white px-8 md:px-16 lg:px-24 shadow-lg'>
      <div className='container py-2 flex justify-center md:justify-between items-center'>
        <div className='text-2x1 font-bold hidden md:inline'>Ellyzes John</div>
        <div className='space-x-6'>
          <a href="#home" className='hover:text-gray-400'>Home</a>
          <a href="#about" className='hover:text-gray-400'>About Me</a>
          <a href="#services" className='hover:text-gray-400'>Services</a>
          <a href="#projects" className='hover:text-gray-400'>Projects</a>
        </div>
        <button className='bg-black text-white hidden md:inline transform transition-transform
        duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact Me</button>
      </div>
    </nav>

    
  )
}

export default NavBar