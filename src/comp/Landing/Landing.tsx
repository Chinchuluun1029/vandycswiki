import React from 'react';

import RoundedCorner from '../RoundedCorner/RoundedCorner';

// import './Landing.css';

const appStyle = {  
  height: '40vh',
  backgroundPosition: 'center',
}

function Landing() {
  return (
    <div className="Landing" style={appStyle}>
      <section style={appStyle} />
      <RoundedCorner />
    </div>
  );
}

export default Landing;
