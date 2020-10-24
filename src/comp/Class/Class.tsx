import React from 'react';
import THEME from '../../constants/colors';

interface IClassProps {
  name?: string,
  code?: number,
  desc?: string,
}


const roundedCornerStyle = {
  backgroundColor: '#121212',
  maxWidth: '20vw',
  border: `5px solid ${THEME.palette.themePrimary}`,
  borderRadius: '25px',
  padding: '25px',
  margin: 'auto',
  terminal: {
    color: THEME.palette.themePrimary,
  },
}

const Class = (props: IClassProps) => {
  const { name = "def", code = "code", desc = "Desc" } = props;
  return (
    <div style={roundedCornerStyle}>
      <h1>{name}</h1>
    </div>
  )
}

export default Class;