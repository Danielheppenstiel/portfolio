import * as Scroll from 'react-scroll';
import { Link } from 'react-scroll'
import { useState } from 'react';
import { HiMenuAlt3 as HamburgerMenu } from 'react-icons/hi';
import { MdOutlineClose } from 'react-icons/md';

function Sidebar() {

    const [isOpen, setIsOpen] = useState(false);

    function toggleMenu() {

        setIsOpen(!isOpen);

    };

    function closeMenu() {
        setIsOpen(false);
    };

    const openIcon = <HamburgerMenu color='white' className='w-6 h-6 mx-4 md:hidden sm:w-8 sm:h-8' />
    const closedIcon = <MdOutlineClose className=' w-6 h-6 z-10 md:hidden sm:w-8 sm:h-8' color='white' />

  return (
    <div>
        <div className='icon-container w-8 h-16 flex flex-col justify-center items-center z-12' onClick={toggleMenu}>
            {isOpen ? closedIcon : openIcon}
        </div>
        {isOpen ? (
                    <div className='absolute top-0 left-0 w-full h-screen text-gray-200 bg-navy-blue flex flex-col justify-center items-center md:hidden'>
                        <ul className='font-inco'>
                            <li className='flex flex-col text-2xl py-6 hover:translate-y-1' onClick={closeMenu}>
                                <p className='text-gray-400 mx-auto'>01.</p>
                                <Link to="about" spy={true} smooth={true} offset={-45} duration={550} className='mx-auto cursor-pointer' onClick={closeMenu}>About</Link>
                            </li>
                            <li className='flex flex-col text-2xl py-6 hover:translate-y-1' onClick={closeMenu}>
                                <p className='text-gray-400 mx-auto'>02.</p>
                                <Link to="projects" spy={true} smooth={true} offset={-50} duration={550} className='mx-auto cursor-pointer' onClick={closeMenu}>Projects</Link>
                            </li>
                            <li className='flex flex-col text-2xl py-6 hover:translate-y-1' onClick={closeMenu}> 
                                <p className='text-gray-400 mx-auto'>03.</p>
                                <Link to="contact" spy={true} smooth={true} offset={-50} duration={550} className='mx-auto cursor-pointer' onClick={closeMenu}>Contact</Link>
                            </li>
                        </ul>
                        <div className='py-8'>
                            <button className='text-gray-400 text-center border rounded-md px-8 py-4 hover:bg-baby-green'><a href='https://www.dropbox.com/scl/fi/ihzhc5u6snpqe7153by16/Resume-2023-frontend-dev.pdf?rlkey=xmfysjz14p4bi7hgwlcle6xl9&dl=0' target='_blank'>RESUME</a></button>
                        </div>
                    </div>
        ) : null}
    </div>
  )
}

export default Sidebar