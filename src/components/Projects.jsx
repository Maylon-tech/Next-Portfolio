import React from 'react'
import ProjectItem from './ProjectItem'

import Projeto01 from '../assets/images/projects/E-CommerceMall.png'
import Projeto02 from '../assets/images/projects/Cafe-Store.png'
import Projeto03 from '../assets/images/projects/Find-Restaurant.png'
import Projeto04 from '../assets/images/projects/Dashboard.png'
import Projeto05 from '../assets/images/projects/Coffee-Shop.png'
import Projeto06 from '../assets/images/projects/Car-Delivery.png'

const Projects = () => {
  return (
    <div className='w-full'>
        <div className='max-w-[1140px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest text-[#5651e5]'>Projects</p>
            <h2 className='py-4'>What I've Built</h2>

            <div className='grid md:grid-cols-2 gap-8'>               
                <ProjectItem 
                    title="ECommerce"
                    backgroundImg={Projeto01}
                    projectUrl='/property'
                />
                <ProjectItem 
                    title="Cafe Store"
                    backgroundImg={Projeto02}
                    projectUrl='/property'
                />
                <ProjectItem 
                    title="Find Your Restaurant"
                    backgroundImg={Projeto03}
                    projectUrl='/property'
                />
                <ProjectItem 
                    title="Dashboard"
                    backgroundImg={Projeto04}
                    projectUrl='/property'
                />
                <ProjectItem 
                    title="Coffee Shop"
                    backgroundImg={Projeto05}
                    projectUrl='/property'
                />
                <ProjectItem 
                    title="Car Delivery"
                    backgroundImg={Projeto06}
                    projectUrl='/property'
                />
            </div>
        </div>
    </div>
  )
}

export default Projects