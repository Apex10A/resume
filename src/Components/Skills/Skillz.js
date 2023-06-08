import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3, faBootstrap, faGit, faSquareJs } from '@fortawesome/free-brands-svg-icons';
import Navigation from '../Navigation';
import Tailwind from './Untitled (1).png'


const Skillz = () => {
  return (
    <div>
      <Navigation/>
          <div className='text-center  h-screen justify-center items-center flex ' id='skills'>
        <div className='block'>
        
        <div className='grid grid-cols-2 sm:grid-cols-3  justify-center  mx-auto' id='space'>
            <div>
            <FontAwesomeIcon icon={faReact} className='text-7xl ' id='react'/>
            <h1 className='pt-2' id='react'>React</h1>
            </div>
            <div>
            <FontAwesomeIcon icon={faHtml5} className='text-6xl ' id='react'/>
            <h1 className='pt-2' id='react'>HTML</h1>
            </div>
            <div>
            <FontAwesomeIcon icon={faCss3} className='text-6xl' id='react'/>
            <h1 className='pt-2' id='react'>CSS</h1>
            </div>
            <div className=' items-center' id='tail'>
              <img src={Tailwind} alt="" id='image' className='' />
              <h1 className='' id='react'>Tailwind</h1>
            </div>
            
            <div>
            <FontAwesomeIcon icon={faBootstrap} className='text-6xl' id='react'/>
            <h1 className='pt-2' id='react'>Bootstrap</h1>
            </div>

            <div>
            <FontAwesomeIcon icon={faSquareJs} className='text-6xl' id='react'/>
            <h1 className='pt-2' id='react'>Javascript</h1>
            </div>

            <div>
            <FontAwesomeIcon icon={faGit} className='text-6xl' id='react'/>
            <h1 className='pt-2' id='react'>Git</h1>
            </div>
        </div>
        </div>
    </div>
    </div>
  )
}
export default Skillz