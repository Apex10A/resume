import React from 'react'
import Meta from './Screenshot (115).png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faCodeFork } from '@fortawesome/free-solid-svg-icons';

const Metaverse = () => {
  return (
    <div className='pt-7'>
      <div className='lg:flex block items-center mx-auto justify-between' id='back' >

<div>
    <img src={Meta} alt="" className='rounded-xl'/>
</div>

<div className='lg:ml-10'>
    <h1 className='lg:text-2xl text-lg font-extrabold lg:mr-5 pt-3 lg:pt-0 pb-1 lg:pb-3'>Restaurant Website</h1>
    <p className='uppercase lg:pb-4 pb-3 font-bold text-xs md:text-sm' id='lang'>Bootstrap + HTML</p>

    <h3 className='text-sm' id='opaques'>Experience culinary perfection at FOODS. Discover delectable flavors, elegant ambiance, and impeccable service. Indulge your senses today.</h3>

    <div className='flex gap-10 pt-5'>
              <div className='flex' id='code'>
              <a href="https://metavworld.netlify.app/" target='_blank'  className='flex'>
              <FontAwesomeIcon icon={faEye} />
              <p className='text-sm pl-2'>Live</p>
              </a>

              </div>
              <div className='flex' id='code'>
              <a href="https://github.com/Apex17751/metaverse-world" target='_blank' className='flex'>
              <FontAwesomeIcon icon={faCodeFork} />
              <p className='text-sm pl-2'>Code</p>
              </a>
              </div>

            </div>
</div>

</div>

    </div>
  )
}

export default Metaverse
