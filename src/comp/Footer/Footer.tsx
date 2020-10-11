import React from "react";

import COLORS from '../../constants/colors'; 

const footerStyle: any = {
  backgroundColor: COLORS.darkGray,
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
      <h1>Made with ☕ and ❤️</h1>
      {/* TODO:anchor below */}
      <h1>Github LinkedIn</h1> 
    </div>
  )
}

export default Footer;