import Image from 'next/image'
import React from 'react'
import html from '../assets/images/skills/logo-html5.svg' 
import css from '../assets/images/skills/logo-css3.svg' 
import javascript from '../assets/images/skills/logo-javascript.svg' 
import react from '../assets/images/skills/logo-react.svg' 
import node from '../assets/images/skills/node-logo02.png' 
import next from '../assets/images/skills/next.png' 
import express from '../assets/images/skills/express-logo.png' 
import typescript from '../assets/images/skills/TS-logo.png' 

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
                        <div className='flex flex-col items-center justify-center'>
                            <h3>HTML</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                className=''
                                src={css}
                                alt='CSS'
                                width={65}
                                height={65}
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>HTML</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                className=''
                                src={javascript}
                                alt='javascript'
                                width={65}
                                height={65}
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>HTML</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                className=''
                                src={react}
                                alt='react'
                                width={65}
                                height={65}
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>ReactJS</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                className=''
                                src={node}
                                alt='node'
                                width={65}
                                height={65}
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>NodeJS</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                className=''
                                src={next}
                                alt='next'
                                width={65}
                                height={65}
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>NextJS</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                className=''
                                src={express}
                                alt='express'
                                width={65}
                                height={65}
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>ExpressJS</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                className=''
                                src={typescript}
                                alt='typescript'
                                width={65}
                                height={65}
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>typescript</h3>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default Skills