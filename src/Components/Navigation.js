import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PreLoader from './PreLoader';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Resume from './myResume.pdf'


const Navigation = () => {
  const [loading, oyaLoading] = useState(true);
  const [navOpen, setNavOpen] = useState(false);

  const handleClick = () => {
    setNavOpen(!navOpen);
  };

  useEffect(() => {
    // Simulate some asynchronous task
    setTimeout(() => {
      oyaLoading(false); // Once the task is done, set loading to false
    }, 3000);
  }, []);

  const handleNavLinkClick = () => {
    setNavOpen(false); 
    oyaLoading(true); 
  };

  {/* download file */}
  const downloadFile = () => {
    window.location.href = "https://yoursite.com/src/assets/files/exampleDoc.pdf"
  }
  return (
    <nav>
      {loading ? (
        <PreLoader />
      ) : (
        <div>
          
                  <div className="pt-14 pb-14 md:h-20 pr-10 pl-10 md:pr-0 md:pl-0 md:items-center md:flex md:justify-center relative " id="navi">
          
          <div onClick={handleClick}>
            {navOpen ? (
              <XIcon className="block md:hidden absolute right-10 w-6 font-bold text-white" />
            ) : (
              <MenuIcon className="block md:hidden absolute right-10 w-6 font-extrabold text-white" />
            )}
          </div>
          <div className={`flex md:hidden absolute left-0 ${navOpen ? 'hidden' : ''}`} id="nav">
  <h1 className="text-white text-xl font-bold">Apex.</h1>
</div>


          <ul className={`md:flex text-white md:items-center text-left md:justify-center   transition-all duration-300  text-lg ${navOpen ? '' : 'hidden'}`} id="nav">
            <li className="pb-3">
              <Link to="/" onClick={handleNavLinkClick}>
                <a href="#" className="font-bold">
                  Home
                </a>
              </Link>
            </li>
            <hr className="md:hidden block pb-2" id="hrz" />
            <li className="pb-3">
              <Link to="/project" onClick={handleNavLinkClick}>
                <a href="#" className="font-bold">
                  Projects
                </a>
              </Link>
            </li>
            <hr className="md:hidden block pb-2" id="hrz" />
            <li className="pb-3">
              <Link to="/skillz" onClick={handleNavLinkClick}>
                <a href="#" className="font-bold">
                  Skills
                </a>
              </Link>
            </li>
            <hr className="md:hidden block pb-2" id="hrz" />
            <li className="pb-3">
              <Link to="/about" onClick={handleNavLinkClick}>
                <a href="#" className="font-bold">
                  About me
                </a>
              </Link>
            </li>
            <hr className="md:hidden block pb-2" id="hrz" />
            <li className="pb-3">
              <Link to="/contact">
                <a href="#" className="font-bold">
                  Contact me
                </a>
              </Link>
            </li>
            <hr className="md:hidden block pb-2" id="hrz" />
            <div>
              <a href={Resume} download>
              <button type="button" className="mt-3 md:mt-0 py-4 px-5 font-bold" id="btn">
                Download cv
              </button>
              </a>
            </div>
          </ul>
        </div>
        </div>

      )}
    </nav>
  );
};

export default Navigation;
