import { RiExternalLinkLine as ExternalLink } from 'react-icons/ri'
import { SlSocialGithub as GithubLogo } from 'react-icons/sl'



function Projects() {


  return (
    <section id='projects' className="container mx-auto mt-40 h-100 w-7/12 bg-navy-blue">
        
           <div className="flex gap-4 justify-center items-center md:justify-end">
                <div className="hidden container h-0.5 w-60 bg-baby-blue md:block"></div>
                <h3 className="text-baby-blue text-lg font-inter relative md:text-2xl "><span>02. </span>Projects</h3>
           </div>

           {/* PROJECT CARDS */}
            <div className="grid py-12 gap-4 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-2">

              {/* card one */}
              <div className="flex flex-col gap-8 items-center justify-center bg-[#0f1e39] w-100 h-72 shadow-lg rounded-lg hover:-translate-y-2 overflow-auto">

                  <div className='flex gap-4 '>
                    <a href="https://github.com/Danielheppenstiel/Github-Search-App-React" target="_blank">
                      <GithubLogo color='white' />
                    </a>

                    <a href="https://gregarious-dragon-a3ff0c.netlify.app/" target="_blank">
                      <ExternalLink color='white' />
                    </a>
                    
                  </div>
                  <h3 className='text-baby-blue text-xl text-center'>DevFinder</h3>
                  <p className='text-gray-400 text-center text-sm px-2'>A single page application for finding developer profiles on github, built with the Github API and modern technologies.</p>
                  <div className='flex gap-1 text-sm text-gray-600'>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>JavaScript</p>
                    <p>React</p>
                  </div>
              </div>

              {/* card two */}
              <div className="flex flex-col gap-8 items-center justify-center bg-[#0f1e39] w-100 h-72 shadow-lg rounded-lg hover:-translate-y-2 overflow-auto">
                  <div className='flex gap-4 '>

                    <a href="https://github.com/Danielheppenstiel/Tic-Tac-Toe-Game" target="_blank">
                      <GithubLogo color='white' />
                    </a>

                    <a href="https://danielheppenstiel.github.io/Tic-Tac-Toe-Game/" target="_blank">
                    <ExternalLink color='white' />
                    </a>
                    
                  </div>
                  <h3 className='text-baby-blue text-xl text-center'>Tic-Tac-Toe</h3>
                  <p className='text-gray-400 text-center text-sm px-2'>A traditional Tic-Tac-Toe game played against a virtual player, built with vanilla javascript</p>
                  <div className='flex gap-1 text-sm text-gray-600'>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>JavaScript</p>
                  </div>
              </div>     

              {/* card three */}
              <div className="flex flex-col gap-8 items-center justify-center bg-[#0f1e39] w-100 h-72 shadow-lg rounded-lg hover:-translate-y-2 overflow-auto">
                  <div className='flex gap-4 '>

                  <a href="https://github.com/Danielheppenstiel/react-feedback-application" target="_blank">
                      <GithubLogo color='white' />
                    </a>

                    <a href="https://danielheppenstiel.github.io/react-feedback-application/" target="_blank">
                    <ExternalLink color='white' />
                    </a>
                    
                  </div>
                  <h3 className='text-baby-blue text-xl text-center'>Feedback Application</h3>
                  <p className='text-gray-400 text-center text-sm px-2'>React application used to provide feedback for a product or service</p>
                  <div className='flex gap-1 text-sm text-gray-600'>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>JavaScript</p>
                    <p>React</p>
                  </div>
              </div>


              {/* card four */}
              <div className="flex flex-col gap-8 items-center justify-center bg-[#0f1e39] w-100 h-72 shadow-lg rounded-lg hover:translate-y-2 overflow-auto">
                  <div className='flex gap-4 '>
                    <a href="https://github.com/Danielheppenstiel/portfolio" target="_blank">
                      <GithubLogo color='white' />
                    </a>
                  </div>
                  <h3 className='text-baby-blue text-xl text-center'>Portfolio Website</h3>
                  <p className='text-gray-400 text-center text-sm px-2'>My personal portfolio to display work I have completed and to be used as a introduction and way of getting in contact.</p>
                  <div className='flex gap-1 text-sm text-gray-600'>
                    <p>HTML</p>
                    <p>Tailwind</p>
                    <p>JavaScript</p>
                    <p>React</p>
                  </div>
              </div>


              {/* card five */}
              <div className="flex flex-col gap-8 items-center justify-center bg-[#0f1e39] w-100 h-72 shadow-lg rounded-lg hover:translate-y-2 overflow-auto">
                  <div className='flex gap-4 '>

                    <a href="https://github.com/Danielheppenstiel/Pig-Game" target="_blank">
                      <GithubLogo color='white' />
                    </a>

                    <a href="https://danielheppenstiel.github.io/Pig-Game/" target="_blank">
                     <ExternalLink color='white' />
                    </a>

                  </div>
                  <h3 className='text-baby-blue text-xl text-center'>Pig Game</h3>
                  <p className='text-gray-400 text-center text-sm px-2'>A desktop web application for playing the dice game 'Pig'</p>
                  <div className='flex gap-1 text-sm text-gray-600'>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>JavaScript</p>
                  </div>
              </div>


              {/* card six */}
              <div className="flex flex-col gap-8 items-center justify-center bg-[#0f1e39] w-100 h-72 shadow-lg rounded-lg hover:translate-y-2 overflow-auto">
                  <div className='flex gap-4 '>

                  <a href="https://github.com/Danielheppenstiel/Time-Tracking-Dashboard" target="_blank">
                      <GithubLogo color='white' />
                    </a>

                    <a href="https://danielheppenstiel.github.io/Time-Tracking-Dashboard/" target="_blank">
                     <ExternalLink color='white' />
                    </a>

                  </div>
                  <h3 className='text-baby-blue text-xl text-center'>Time Tracking Dashboard</h3>
                  <p className='text-gray-400 text-center text-sm px-2'>Displays how time was spent over a daily, weekly and monthly basis.</p>
                  <div className='flex gap-1 text-sm text-gray-600'>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>JavaScript</p>
                    <p>React</p>
                  </div>
              </div>

            </div>
            
    </section>
  )
}

export default Projects