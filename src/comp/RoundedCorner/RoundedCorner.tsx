import React from 'react';

import THEME from '../../constants/colors';

import './RoundedCorner.css';

const roundedCornerStyle = {
  backgroundColor: '#121212',
  width: '50vw',
  minHeight: '25vh',
  border: `5px solid ${THEME.palette.themePrimary}`,
  borderRadius: '25px',
  padding: '25px',
  margin: 'auto',
  marginTop: '-100px',
  terminal: {
    fontFamily: 'Courier New',
    color: THEME.palette.themePrimary,
  },
}

const RoundedCorner = () => {
  return (
    <div style={roundedCornerStyle}>
      <h2 style={roundedCornerStyle.terminal}>{'>'} which course are you interested in?</h2>
      <h2 style={roundedCornerStyle.terminal}><span className="blink">{'>'} cs4260</span></h2>
    </div>
  )
}

export default RoundedCorner;