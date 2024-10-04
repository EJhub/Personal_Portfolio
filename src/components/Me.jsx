import React from 'react'
import MeImage from '../assets/icon.png'

const Me = () => {
  return (
    <div className='bg-gradient-to-r from-gray-900 to-gray-700 text-white text-center py-16' id='home'>
        <img src={MeImage} alt='Icon'
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105'/>
        <h1 className='text-4x1 font-bold'>I'm {""}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Ellyzes John David</span>
            , Web Developer
        </h1>
        <p className='mt-4 text-lg text-gray-400'>
            I specialize in building a modern and responsive web application.
        </p>
        <div className='mt-8 space-x-4'>
            <button className='bg-black text-white hidden md:inline transform transition-transform
        duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact with me</button>
            <button className='bg-white text-black hidden md:inline transform transition-transform
        duration-300 hover:scale-105 px-4 py-2 rounded-full'>Resume</button>
        </div>
    </div>
  )
}

export default Me