import React from 'react'
import contactImg from '../assets/images/contact.jpeg'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
const Contact = () => {
  return (
    <div className='w-full lg:h-screen'>
        <div className='max-w-[1140px] m-auto px-2 py-16 w-full'>
          <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Contact</p>
          <h2 className="py-4">Get in Touch</h2>
          <div className="grid lg:grid-cols-5 gap-8">

          {/* LEFT */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <img src={contactImg} alt="" className="rounded-xl hover:scale-105 ease-in duration-300" />
              </div>

              <div className="">
                <h2 className="">Name here</h2>
                <p className="">React.js Front-End Developer</p>
                <p className="py-4">I'm available for freelance or full-time positions. Contact me and let's talk.</p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
  
                  <div className='rounded-full shadow-lg shadow-gray-400 ml-5 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaLinkedinIn size={25} />
                  </div>
                  <div className='rounded-full shadow-lg shadow-gray-400 ml-5 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaGithub size={25} />
                  </div>
                  <div className='rounded-full shadow-lg shadow-gray-400 ml-5 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <BsFillPersonLinesFill  size={25} />
                  </div>
                  <div className='rounded-full shadow-lg shadow-gray-400 ml-5 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineMail size={25} />
                  </div>
  
                </div> 
              </div>
            </div>

          </div>

          {/* RIGHT */} 
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">

              <form action="" className="">
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">

                  <div className="flex flex-col">
                    <label htmlFor="" className="uppercase text-sm py-2">Name</label>
                    <input type="text" className="border-2 rounded-lg p-3 flex border-gray-300" />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="" className="uppercase text-sm py-2">Phone Number</label>
                    <input type="text" className="border-2 rounded-lg p-3 flex border-gray-300" />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="" className="uppercase text-sm py-2">Name</label>
                    <input type="text" className="border-2 rounded-lg p-3 flex border-gray-300" />
                  </div>

                </div>
              </form>

            </div>
          </div>         
          </div>
        </div>
    </div>
  )
}

export default Contact