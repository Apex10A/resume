import React, {useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import Navigation from '../Navigation';
import emailjs from 'emailjs-com';



const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2sbujjj', 'template_vjtaqe7', e.target, 'aAQQSgN15ue38T-NY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <div>
        <Navigation/>
        <div id='contact' className='pt-20 pb-8'>
        <div>
            
        </div>

        <div className='lg:flex block justify-evenly items-center'>
        <div className='items-center flex justify-center'>
        <div>
        <p className='sm:text-3xl text-xl font-bold'>Let's chat.</p>
        <p  className='sm:text-3xl text-xl font-bold'>Tell me about your project</p>
        <div>
            <p  className='sm:text-xl text-md font-medium pt-3'>Lets create something together</p>
        </div>
        <div className='mt-5 flex items-center' id='mailer'>
            <div className='mr-2' id='enve'>
            <FontAwesomeIcon icon={faEnvelope} />
            </div>
           <div>
           <h1 className='sm:text-lg text-sm '> Mail me at:</h1>
            <p className=''> <a href="mailto:praizafolabi12@gmail.com"><ins className='text-sm sm:text-lg'>praizafolabi12@gmail.com</ins></a></p>
           </div>
        </div>
        </div>
        </div>

        <div className='items-center mx-auto lg:mx-0 justify-center flex mt-10 lg:mt-0' id='cont'>
            <div className="block">
            <div>
                <h1 className='text-xl text-center lg:text-left font-bold pb-8 pt-3'>Send us a message</h1>
            </div>
            <form action="" onSubmit={sendEmail} target="_blank" >
            <div className='mb-3'>
                <input type="text" name="name" id="name" placeholder='Full-name*' className='rounded-xl border-none outline-none px-3 py-2' required />
            </div>
            <div className='mb-3'>
                <input type="email" name="email" id="mail" placeholder='Email Address*' className='rounded-xl border-none outline-none px-3 py-2 mt-3' required />
            </div>
            <div className='mb-3 mt-4'>
                <h1 className='mb-3'>Tell us more about your project*</h1>
                <textarea name="message" id="messa" className='rounded-xl px-3 outline-none py-3 mb-3' cols="30" rows="7"></textarea>
            </div>
            <div>
                <input type="submit" id='btns' value="Send Message" className='bg-white mb-5 cursor-pointer font-bold rounded-xl text-slate-950 px-3 py-2' />
            </div>
            </form>
            </div>
        </div>


        
        </div>


      
    </div>
    </div>
  )
}

export default Contact
