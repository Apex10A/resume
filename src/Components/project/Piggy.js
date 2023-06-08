import React from 'react'
import Pig from './Screenshot (3).png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faCodeFork } from '@fortawesome/free-solid-svg-icons';

const Piggy = () => {
  return (
    <div className='pt-7'>
        <div className='lg:flex block items-center mx-auto justify-between' id='back' >

<div>
    <img src={Pig} alt="" id='restz' className='rounded-xl'/>
</div>

<div className='lg:ml-2 '>
    <h1 className='lg:text-2xl text-lg font-extrabold lg:mr-5 pt-3 lg:pt-0 pb-1 lg:pb-3'>PiggyVest Website clone</h1>
    <p className='uppercase lg:pb-4 pb-3 font-bold text-xs md:text-sm'>React + Tailwind + UI </p>

    <h3 className='text-sm' id='opaques'>"Unlock financial freedom at my Cloned Piggyvest Website Save, invest, and plan for a brighter future with ease.".</h3>

    <div className='flex gap-10 pt-5'>
              <div className='flex' id='code'>
              <a href="https://piggyvestclonez.netlify.app/piggy.html" target='_blank' className='flex'>
              <FontAwesomeIcon icon={faEye} />
              <p className='text-sm pl-2'>Live</p>
              </a>

              </div>
              <div className='flex' id='code'>
              <a href="https://github.com/Apex17751/Piggyvest-clone" target='_blank' className='flex'>
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

export default Piggy
