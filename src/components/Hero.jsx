import { Link } from 'react-scroll'
import { useEffect, useRef, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa'

function Hero() {


  return (
    <section className="container mx-auto w-7/12 mt-[10%] font-inter bg-navy-blue">
        <p className="text-gray-400 text-1xl">Hi, my name is</p>
        <h1 className="text-4xl lg:text-5xl font-bold text-baby-blue py-2">Daniel Heppenstiel</h1>
        <h2 className="text-4xl lg:text-5xl font-bold text-ashy-blue py-2">I'm a Frontend Developer</h2>
        <p className="text-gray-400 py-2 leading-7"> 
        Welcome to my portfolio website! As a frontend developer, I have a passion for designing and building modern, user-friendly websites that make an impact. I invite you to explore my portfolio to get a sense of my style and approach, and I hope that we'll have the opportunity to work together. Thank you for visiting!
         </p>
            <div className='py-4'>
                <Link to="projects" spy={true} smooth={true} offset={-50} duration={700} className='text-gray-400 group flex justify-between items-center gap-2 text-center border rounded-md w-36 px-4 py-2 hover:bg-baby-green transition-colors duration-300 cursor-pointer'>
                    <p href="#">PROJECTS</p>
                    <span >
                        <FaArrowRight className='group-hover:rotate-90 duration-300' />
                    </span>
                </Link>
            </div>
    </section>
  )
}

export default Hero