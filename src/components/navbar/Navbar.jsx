import * as Scroll from 'react-scroll';
import { Link } from 'react-scroll'
import { useEffect, useRef, useState } from 'react';
import Sidebar from './Sidebar';
import Social from './Social';
import { MdComputer as ComputerIcon } from 'react-icons/md';


function Navbar() {

  const [showNavbar, setShowNavbar] = useState(true);


  const navbarRef = useRef();

  useEffect(() => {
    
    const handleScroll = () => {

      const scrollPosition = window.scrollY;

      if (scrollPosition >= 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      };
        
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    
  }, []);



  return (
    <>
      <nav ref={navbarRef}  className={`container opacity-100 h-20 mx-auto flex justify-between items-center transition-all duration-700 ${showNavbar ? 'sticky top-0' : 'sticky -top-20'}`}  >
        <div>
            <ComputerIcon color='white' className='w-6 h-6 mx-4 sm:w-10 sm:h-10' />
        </div>
        <Sidebar />
        <div className='hidden md:flex items-center'>
            <ul className='text-gray-200 font-inco flex gap-x-8 pr-6'>
                <li className='hover:translate-y-0.5 transition-all duration-300'>
                    <Link to="about" spy={true} smooth={true} offset={-45} duration={550} className='cursor-pointer'><span className='text-gray-400'>01.</span>About</Link>
                </li>
                <li className='hover:translate-y-0.5 transition-all duration-300'>
                    <Link to="projects" spy={true} smooth={true} offset={-50} duration={550} className='cursor-pointer'><span className='text-gray-400'>02.</span>Projects</Link>
                </li>
                <li className='hover:translate-y-0.5 transition-all duration-300'>
                    <Link to="contact" spy={true} smooth={true} offset={-50} duration={550} className='cursor-pointer'><span className='text-gray-400'>03.</span>Contact</Link>
                </li>
            </ul>
            <div>
                <button className='text-gray-400 text-center border rounded-md px-4 py-2 hover:bg-baby-green transition-colors duration-300'><a href='https://www.dropbox.com/scl/fi/ihzhc5u6snpqe7153by16/Resume-2023-frontend-dev.pdf?rlkey=xmfysjz14p4bi7hgwlcle6xl9&dl=0' target='_blank'>RESUME</a></button>
            </div>
        </div>
      <Social />
      </nav>
    </>
  )
}

export default Navbar