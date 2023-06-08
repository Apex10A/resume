import React from 'react'
import Sophie from './Screenshot (2).png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faCodeFork } from '@fortawesome/free-solid-svg-icons';

const Sophia = () => {
  return (
    <div className='pt-7'>
        <div className='lg:flex mx-auto block items-center justify-between' id='back' >

<div>
    <img src={Sophie} alt="" id=''  className='rounded-xl'/>
</div>
<div className='lg:ml-10'>
    <h1 className='lg:text-2xl text-lg font-extrabold lg:mr-5 pt-3 lg:pt-0 pb-1 lg:pb-3'>Sophia Website</h1>
    <p className='uppercase lg:pb-4 pb-3 font-bold text-xs md:text-sm' id='lang'>React + Tailwind + UI </p>

    <h3 className='text-sm' id='opaques'>Instant airtime top-ups made easy. Experience the convenience of instant airtime refills anytime, anywhere. Discover a new level of convenience and stay connected with Sophia.</h3>

    <div className='flex gap-10 pt-5'>
              <div className='flex' id='code'>
              <a href="https://sophiabotzz.netlify.app/" target='_blank' className='flex'>
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
      
    </div>
  )
}

export default Sophia
