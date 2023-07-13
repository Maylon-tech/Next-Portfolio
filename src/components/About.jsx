import Image from 'next/image'
import React from 'react'
import aboutImg from '../assets/images/about04.jpg'

const About = () => {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1140px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5] '>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600'>
                    I am ReactJS and NextJS Developer.
                </p>
                <p className='py-2 text-gray-600'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Impedit quaerat labore vitae ab ipsa autem, ad odit unde inventore placeat esse,
                     neque voluptas illum id soluta cumque est nostrum officia ipsum eius.
                </p>
                <p className='py-2 text-gray-600'> 
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Impedit quaerat labore vitae ab ipsa autem, ad odit unde inventore placeat esse,
                     neque voluptas illum id soluta cumque est nostrum officia ipsum eius.
                </p>
                <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects.</p>
            </div>

            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image 
                    className='rounded-xl'
                    src={aboutImg} 
                    alt='aboutImage' 
                    width={300} 
                    height={300} 
                />
            </div>
        </div>
    </div>
  )
}

export default About