import React from 'react';
import Class from '../Class/Class';


const classesStyle = {
  display: "flex",
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column' as "column",
  width: "100vw",
  minHeight: "60vh",
  backgroundColor: "#fff",
}

const classComponentStyle = {
  display: "flex",
  flexDirection: 'row' as "row",
}

const Classes = (props: any) => {
  return (
    <div style={classesStyle}>
      <h1>Classes</h1>
      <div style={classComponentStyle}>
        <Class name="CS1101" code={2201} desc="lorem ipsum" />
        <Class name="CS2201" />
      </div>
    </div>
  )
}

export default Classes;