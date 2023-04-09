import programming from '../assets/programming.svg'
import { IoLogoJavascript as JavascriptLogo } from 'react-icons/io'
import { TiHtml5 as HtmlLogo } from 'react-icons/ti'
import { IoLogoCss3 as CssLogo } from 'react-icons/io'
import { SiTailwindcss as TailwindLogo } from 'react-icons/si'
import { FaReact as ReactLogo } from 'react-icons/fa'
import { BsGit as GitLogo } from 'react-icons/bs'




function AboutMe() {


  return (
    <section id='about' className="container mx-auto mt-60 h-100 w-7/12 bg-navy-blue">
        
            <div className="flex gap-4 justify-center items-center md:justify-start">
                <h3 className="text-baby-blue text-lg font-inter relative md:text-2xl "><span>01. </span>About Me</h3>
                <div className="hidden container h-0.5 w-60 bg-baby-blue md:block"></div>
            </div>

            <div className='text-gray-400 grid grid-cols-1 auto-rows-max md:grid-cols-2'>
                <div className="py-12 col-span-2">
                    <p>
                    As a frontend web developer, I am passionate about creating intuitive and engaging user experiences. With a background in HTML, CSS, and JavaScript, I specialize in bringing designs to life through efficient, performant code. I have experience working with frontend frameworks, including React and Tailwind, and am always eager to learn new technologies and tools to stay up-to-date with industry trends. Additionally, I have a solid understanding of responsive design principles and accessibility standards, ensuring that my work is inclusive and user-friendly for all.
                    <br /> <br />
                    My previous projects can be viewed on my GitHub, and I am always seeking new opportunities to apply my skills and collaborate with other creative professionals. Whether working independently or as part of a team, I am committed to delivering high-quality work that exceeds expectations and delivers measurable results. If you're looking for a frontend developer who is dedicated, passionate, and constantly striving to improve, let's connect and see how we can work together.
                    </p>
                </div>

                <div className='py-12'>
                    <p>These are the current technologies i've been working with :</p>
                    <div className='grid grid-cols-2 mt-8 gap-2'>
                        <p> <HtmlLogo color='white' className='inline-block' /> <span>HTML</span> </p>
                        <p> <CssLogo color='white' className='inline-block' /> <span>CSS</span> </p>
                        <p> <JavascriptLogo color='white' className='inline-block' /> <span>JavaScript</span> </p>
                        <p> <TailwindLogo color='white' className='inline-block' /> <span>Tailwind</span> </p>
                        <p> <ReactLogo color='white' className='inline-block' /> <span>React</span> </p>
                        <p> <GitLogo color='white' className='inline-block' /> <span>Git</span> </p>
                    </div>
                </div>
            
                <div className='hidden md:py-12 md:w-100 md:flex md:col-span-1 md:col-start-2 md:justify-center md:items-start'>
                    <img className='w-80' src={programming} alt="" />
                </div>

        </div>
    </section>
  )
}

export default AboutMe