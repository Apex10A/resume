import React from 'react'
import Uni from './Screenshot (114).png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faCodeFork } from '@fortawesome/free-solid-svg-icons';

const University = () => {
  return (
    <div className='pt-7'>
      <div className='lg:flex block items-center mx-auto justify-between' id='back' >

<div>
    <img src={Uni} alt="" className='rounded-xl'/>
</div>

<div className='lg:ml-10 '>
    <h1 className='lg:text-2xl text-lg font-extrabold lg:mr-5 pt-3 lg:pt-0 pb-1 lg:pb-3'>University Website</h1>
    <p className='uppercase lg:pb-4 pb-3 font-bold text-xs md:text-sm' id='lang'>Bootstrap + CSS + JS </p>

    <h3 className='text-sm' id='opaques'>Experience the essence of academia through our visually captivating university website. It showcases the institution's offerings, faculty, and campus facilities.</h3>


    <div className='flex gap-10 pt-5'>
              <div className='flex' id='code'>
              <a href="https://apex17751.github.io/uniweb/web.html" target='_blank' className='flex'>
              <FontAwesomeIcon icon={faEye} />
              <p className='text-sm pl-2'>Live</p>
              </a>

              </div>
              <div className='flex' id='code'>
              <a href="https://github.com/Apex17751/uniweb" target='_blank' className='flex'>
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

export default University
