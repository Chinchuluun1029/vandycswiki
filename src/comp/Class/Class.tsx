import React from 'react';
import COLORS from '../../constants/colors';

interface IClassProps {
  name?: string,
  code?: number,
  desc?: string,
}

const roundedCornerStyle = {
  backgroundColor: '#121212',
  maxWidth: '20vw',
  height: '15vh',
  border: `5px solid ${COLORS.cyan}`,
  borderRadius: '25px',
  padding: '25px',
  margin: 'auto',
  terminal: {
    fontFamily: 'Courier new',
    color: COLORS.cyan,
  },
}

const Class = (props: IClassProps) => {
  const { name = "def", code = "code", desc = "Desc" } = props;
  return (
    <div style={roundedCornerStyle}>
      <h1>Class: {name}</h1>
      <h1>Code: {code}</h1>
      <h1>Desc: {desc}</h1>
    </div>
  )
}

export default Class;