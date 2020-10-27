import React from 'react';

import RoundedCorner from '../RoundedCorner/RoundedCorner';

import THEME from '../../constants/colors';

// import './Landing.css';

const appStyle = {
  minHeight: '86vh',
  padding: '2em',
  backgroundPosition: 'center',
  backgroundColor: THEME.palette.neutralLight,
}

function Landing() {
  return (
    <div className="Landing" style={appStyle}>
      <h1>Hello Landing/Home</h1>
      {/* <RoundedCorner /> */}
    </div>
  );
}

export default Landing;
