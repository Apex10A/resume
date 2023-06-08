import React from 'react'
import Navigation from '../Navigation'

const About = () => {
  return (
    <div>
      <Navigation/>
          <div id='About' className='pb-10 h-screen pt-20'>
     
        <div>
            <div className='mx-auto ' id='about'>
                <h1 className='text-lg font-bold mb-2'>Want to know about me?</h1>
                <hr className='w-10 rounded-lg mb-3 font-extrabold'/>

                <div className='leading-8' id='langs'>
                <p className='text-justify'>Behind the screen, I'm a frontend magician, weaving spells of code and design. With an alchemist's touch, I blend HTML, CSS, and JavaScript to create mesmerizing user interfaces. I believe in the power of delightful user experiences, where every pixel has a purpose and every interaction tells a story</p>
                <p className='text-justify'>Driven by curiosity and fueled by creativity, I constantly seek inspiration from the world around me. Whether it's the elegance of nature or the rhythm of music, I find ways to infuse beauty and harmony into my designs.I'm passionate about staying up-to-date with the latest technologies and techniques, always pushing the boundaries of
                   what's possible.
                </p>

                <p className='text-justify pt-2'> So, let's embark on an adventure together, where innovation meets imagination and pixels come to life. Together, we'll create digital wonders that engage, inspire, and enchant users. Are you ready to join me on this journey?</p>
                </div>
            </div>
        </div>
      
    </div>
    </div>

  )
}

export default About