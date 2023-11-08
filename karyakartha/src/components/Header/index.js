import React from 'react';
import {RiMenu3Fill} from "react-icons/ri"
import './index.css';

const Header = ({ isLoggedIn }) => {

  const headerDesktopView = () => {
    return(
      <div className="header-desktop">
      <div className="logo">
        <img src="https://res.cloudinary.com/dtnhhgwlo/image/upload/v1699167233/karyakartha_logo_houqn9.jpg" alt="LOGO OF KARYAKARTA" className='logo_image'/>
      </div>
      {!isLoggedIn ? (
        <div className="login-text">
          Already Registered? <a href="#"> Login </a>  here
        </div>
      ) : null}
    </div>
    )
  }

  const headerMobileView = () => {
    return(
      <div className="header-mobile">
        <div className="logo">
          <img src="https://res.cloudinary.com/dtnhhgwlo/image/upload/v1699167233/karyakartha_logo_houqn9.jpg" alt="LOGO OF KARYAKARTA" className='logo_image'/>
        </div> 
        <div>
          <RiMenu3Fill className='RiMenu3Fill'/>
        </div>
      </div>
    )
  }

  return ( 
    <>
      {headerDesktopView()}
      {headerMobileView()}
    </>
  );
};

export default Header;
