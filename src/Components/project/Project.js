import React from 'react'
import Piggy from './Piggy'
import Rest from './Screenshot (12).png'
import Sophia from './Sophia'
import Todo from './Todo'
import Weather from './Weather'
import University from './University' 
import Metaverse from './Metaverse'
import Navigation from '../Navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faCodeFork } from '@fortawesome/free-solid-svg-icons';

const Project = () => {
  return (
    <div>
      <Navigation />
          <div id='project' className='justify-center items-center flex pt-20 pb-20'>
        <div className='block'>
       
        <div>
        <div className='block lg:flex items-center mx-auto justify-between' id='back' >

        <div>
            <img src={Rest} alt="" id='rest' className='rounded-xl'/>
        </div>

        <div className='lg:ml-2 '>
            <h1 className='lg:text-2xl text-lg font-extrabold lg:mr-5 pt-3 lg:pt-0 pb-1 lg:pb-3'>Restaurant Website</h1>
            <p className='uppercase lg:pb-4 pb-3 font-bold text-xs md:text-sm' id='lang'>React + Tailwind </p>

            <h3 className='text-sm ' id='opaques'>Experience culinary perfection at FOODS. Discover delectable flavors, elegant ambiance, and impeccable service. Indulge your senses today.</h3>

            <div className='flex gap-10 pt-5'>
              <div className='flex' id='code'>
              <a href="https://resturantwebsitez.netlify.app/" target='_blank' className='flex'>
              <FontAwesomeIcon icon={faEye} />
              <p className='text-sm pl-2'>Live</p>
              </a>

              </div>
              <div className='flex' id='code'>
              <a href="https://github.com/Apex17751/my-resturant-website" target='_blank' className='flex'>
              <FontAwesomeIcon icon={faCodeFork} />
              <p className='text-sm pl-2'>Code</p>
              </a>
              </div>

            </div>
        </div>

        </div>


        <Piggy />
        <Sophia />
        <Todo />
        <Weather />
        <University />
        <Metaverse />


        </div>
        </div>

      
    </div>
    </div>

  )
}

export default Project
