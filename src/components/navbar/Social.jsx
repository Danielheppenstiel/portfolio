import { SlSocialGithub, SlSocialInstagram, SlSocialLinkedin, SlSocialTwitter } from 'react-icons/sl';

function Social() {
  return (
    <div className='hidden md:flex md:flex-col md:fixed md:left-4 md:top-[52%]'>
        <ul className='flex flex-col gap-8'>
            <li className='hover:translate-x-0.5 transition-all duration-300'>
                <a href="https://github.com/Danielheppenstiel" target="_blank"> <SlSocialGithub color='white' className='w-5 h-5' /> </a>
            </li>
            <li className='hover:translate-x-0.5 transition-all duration-300'>
                <a href="https://www.linkedin.com/in/daniel-heppenstiel-600345249/" target="_blank"> <SlSocialLinkedin color='white'className='w-5 h-5' /> </a>
            </li>
            <li className='hover:translate-x-0.5 transition-all duration-300'>
                <a href="https://twitter.com/DevWithDan" target="_blank"> <SlSocialTwitter color='white' className='w-5 h-5' /> </a>
            </li>
            <li className='hover:translate-x-0.5 transition-all duration-300'>
                <a href="https://www.instagram.com/danielheppenstiel/" target="_blank"> <SlSocialInstagram color='white' className='w-5 h-5' /> </a>
            </li>
        </ul>

    </div>
  )
}

export default Social