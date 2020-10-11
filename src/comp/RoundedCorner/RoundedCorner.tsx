import React from 'react';

import COLORS from '../../constants/colors';

import './RoundedCorner.css';

const roundedCornerStyle = {
  backgroundColor: '#121212',
  width: '50vw',
  minHeight: '25vh',
  border: `5px solid ${COLORS.cyan}`,
  borderRadius: '25px',
  padding: '25px',
  margin: 'auto',
  marginTop: '-100px',
  terminal: {
    fontFamily: 'Courier new',
    color: COLORS.cyan,
  },
}

const RoundedCorner = () => {
  return (
    <div style={roundedCornerStyle}>
      <h2 style={roundedCornerStyle.terminal}>{'>'} which course are you interested in?</h2>
      <h2 style={roundedCornerStyle.terminal}><span className="blink">{'>'} cs4260</span></h2>
      <button>more...</button>
    </div>
  )
}

export default RoundedCorner;