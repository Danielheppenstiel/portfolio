


function Footer() {
  return (
    <section id="contact" className="container mx-auto mt-36 h-100 w-7/12 ">
            <div className="flex gap-4 justify-center items-center">
                <div className="hidden container h-0.5 w-36 bg-baby-blue md:block"></div>
                <h3 className="text-baby-blue text-lg font-inter relative md:text-2xl "><span>03. </span>Contact</h3>
                <div className="hidden container h-0.5 w-36 bg-baby-blue md:block"></div>
           </div>

           <div className="py-12 text-gray-400 text-center">
                <p>I'm currently seeking Frontend Developer roles within an organization. I'm also open to request to colloborate and any questions. I'll get back to you as soon as possible. Thank you</p>
                <div className="py-12">
                    <a href="mailto:danieltristanheppenstiel@gmail.com?subject=Inquiry from DH Portfolio" className='text-gray-400 text-center border rounded-md py-4 px-6 hover:bg-baby-green transition-colors duration-300'>Message</a>
                </div>
           </div>

    </section>
  )
}

export default Footer