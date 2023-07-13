import Image from 'next/image'
import React from 'react'
import html from '../assets/images/skills/logo-html5.svg' 
import css from '../assets/images/skills/logo-css3.svg' 
import javascript from '../assets/images/skills/logo-javascript.svg' 

const Skills = () => {
  return (
    <div className='w-full lg:h-screen p-2'>
        <div className='max-w-[1140px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widst uppercase text-[#5651e5'>Skills</p>
            <h2 className='py-4'>What I Can Do</h2>       
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                className='bg-blue'
                                src={html}
                                alt=''
                                width={65}
                                height={65}
                            />
                        </div>

                        <div className='m-auto'>
                        <Image 
                            className=''
                            src={css}
                            alt='CSS'
                            width={65}
                            height={65}
                        />
                    </div>

                    <div className='m-auto'>
                    <Image 
                        className=''
                        src={javascript}
                        alt='javascript'
                        width={65}
                        height={65}
                    />
                </div>
                    </div>
                </div>

            </div> 
        </div>
    </div>
  )
}

export default Skills