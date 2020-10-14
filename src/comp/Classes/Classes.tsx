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

interface IMap<T> {
  [index: string]: T;
  [index: number]: T;
} 

enum ESemester {
  Spring = "SPRING",
  Summer = "SUMMER",
  Fall = "FALL",
}

enum EConj {
  OR = "OR",
  AND = "AND"
}

interface IClass {
  code: number,
  title: string,
  desc: string,
  semsOffered: ESemester[],
  varHour: boolean,
  hour: number,
  type: string,
  prereq?: IReqStatus[],
  coreq?: IReqStatus[],
}

interface IReqStatus {
  code: IClass["code"],
  conj: "OR" | "AND",
}


const makeReq: any = (code: number, conj: "OR" | "AND") => {
  return {code: code, conj: conj};
}

const csClasses: IMap<IClass> = {
  "CS1101": {
    code: 1101,
    title: "Programming and Problem Solving",
    desc: `An intensive introduction to algorithm development and problem solving on the computer. Structured problem definition, top down and modular 
      algorithm design. Running, debugging, and testing programs. Program documentation. Not open to students who have earned credit for CS 1104 without permission.`,
    semsOffered: [ESemester.Fall, ESemester.Spring],
    varHour: false,
    hour: 3,
    type: "Core",
  },
  "CS2201": {
    code: 2201,
    title: "Program Design and Data Structure",
    desc: `Continuation of CS 1101. The study of elementary data structures, their associated algorithms and their application in problems; rigorous development of 
      programming techniques and style; design and implementation of programs with multiple modules, using good data structures and good programming style.`,
    semsOffered: [ESemester.Fall, ESemester.Spring],
    varHour: false,
    hour: 3,
    type: "Core",
    prereq: [makeReq(1101, "OR"), makeReq(2201, "OR")],
  }
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