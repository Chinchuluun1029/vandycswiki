import React from "react";

import THEME from '../../constants/colors'; 

const footerStyle: any = {
  backgroundColor: THEME.palette.black,
  padding: '1.2em',
  fontSize: '0.6em',
  width: '100vw',
  textAlign: 'center',
  position: 'fixed',
  left: 0,
  bottom: 0,
}

const Footer = () => {
  return (
    <div className="footer-main" style={footerStyle}>
      <h1>Made with <span role="img" aria-label="coffee-emoji">☕</span> and <span role="img" aria-label="heart-emoji">❤️</span></h1>
      {/* TODO:anchor below */}
      <h1>Github LinkedIn</h1> 
    </div>
  )
}

export default Footer;