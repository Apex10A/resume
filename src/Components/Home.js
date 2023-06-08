import React from 'react'
import Mypic from './my-pic.jpg'
import Navigation from './Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {  } from '@heroicons/react/solid';
import Hello from './Hellos.gif'
import Planet from './planet.gif'
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <div className=''>
      <Navigation />
        <div className='text-white px-10 xl:pb-10 lg:pt-32 items-center' id='height'>
            <div className='text-center relative' >
            <h1 className='text-4xl font-bold'>Hello, i'm Praise Afolabi</h1>
            <p className='lg:w-1/2 text-md lg:leading-0 px-4 lg:px-0 leading-7 pt-3 mx-auto lg:text-lg' id='para'>A frontend virtuoso, crafting visually stunning experiences. With HTML, CSS, and JavaScript, I bring ideas to life. Let's collaborate and create digital magic that leaves a lasting impression!</p>
            </div>
            {/* <div className='absolute top-10'>
              <img src={Hello} alt="" width='300px'/>
            </div>
            <div className='absolute right-0 bottom-10'>
              <img src={Planet} alt="" width='300px'/>
            </div> */}
            <div>
            <Link to='/project'>
            <button type='button' className='mx-auto block mt-6 font-bold px-6 py-3' id='btn'>View Works</button>
            </Link>
                
            </div>

            <div id='social' className='mx-auto justify-center items-center flex mt-10'>
                <a href="https://github.com/Apex17751">
                <FontAwesomeIcon icon={faGithub} className='mr-10' id='github'/>
                </a>
                <a href="https://twitter.com/Afolabipraise3">
                <FontAwesomeIcon icon={faTwitter} className='mr-10' id='twitter'/>
                </a>
                <a href="/temporarily/restricted">
                <FontAwesomeIcon icon={faLinkedin} className='pointer' id='linkedin'/>
                </a>
            

        </div>
           <div className='flex items-center justify-center mt-6' id='opaque'>
            <p className='text-md  pb-3 lg:pb-0 lg:text-lg'>copyright©: All Rights Reserved 2023</p>
           </div>
        </div>
      
    </div>
  )
}

export default Home
