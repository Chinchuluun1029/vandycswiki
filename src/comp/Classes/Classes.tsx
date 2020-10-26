import React, { useState } from 'react';

import { Stack, IStackStyles, IStackTokens } from 'office-ui-fabric-react/lib/Stack';
import { DefaultPalette } from 'office-ui-fabric-react/lib/Styling';
import { getTheme } from 'office-ui-fabric-react/lib/Styling';

import DagreGraph from 'dagre-d3-react';

import {
  DocumentCard,
  DocumentCardActivity,
  DocumentCardDetails,
  DocumentCardPreview,
  DocumentCardTitle,
  IDocumentCardPreviewProps,
  DocumentCardType,
  IDocumentCardActivityPerson,
} from 'office-ui-fabric-react/lib/DocumentCard';

import THEME from '../../constants/colors';

const itemStyles: React.CSSProperties = {
  alignItems: 'center',
  background: DefaultPalette.themePrimary,
  color: DefaultPalette.white,
  display: 'flex',
  height: 50,
  justifyContent: 'center',
  width: 50,
};


const theme = getTheme();
const { palette, fonts } = theme;

const classesStyle = {
  display: "flex",
  flexDirection: 'column' as "column",
  alignText: 'center',
  maxWidth: "100vw",
  minHeight: "60vh",
  backgroundColor: THEME.palette.neutralLight,
  padding: '5em',
}

const classesContentStyle = {
  display: "flex",
  justifyContent: 'space-around',
}

const classComponentStyle = {
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-around',
  alignItems: 'center',
  flexBasis: 'auto',
}

const sidebarStyle = {
  minWidth: '35vw',
  maxHeight: '60vh',
  background: '#0000ff',
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


const wrapStackTokens: IStackTokens = { childrenGap: 10 };

const themedLargeStackTokens: IStackTokens = {
  childrenGap: 'l1',
  padding: 'l1',
};

const Classes = (props: any) => {

  const [showSidebar, setShowSidebar] = useState(false);

  const stackStyles: IStackStyles = {
    root: {
      display: 'flex',
      height: '70vh',
      width: '70vw',
    },
  };

  const handleSidebar = (e: any) => {
    e.preventDefault();
    setShowSidebar(!showSidebar);
  }

  const documentCardStyles = {
    root: {
      maxWidth: '3em',
      backgroundColor: THEME.palette.neutralLight,
      border: `5px solid ${THEME.palette.neutralPrimary}`,
      borderRadius: '0px',
      // boxShadow: theme.effects.elevation64,
      padding: '25px',
      margin: 'auto',
      selectors: {
        ':hover': {
          transform: 'translate(-10px, -10px)', //TODO: fix the transform back issue. use ReactTransitionGroup?
          transition: 'all .35s ease',
          border: `6px solid ${THEME.palette.neutralPrimary}`,
          boxShadow: `10px 10px ${THEME.palette.neutralPrimary}`,
        },
        ':hover::after': {
          border: '0px',
        },
      }
    },
  }

  const documentCardDetailsStyles = {
    root: {
      // maxWidth: '2em',
    }
  }

  const documentCardTitleStyles = {
    root: {
      color: '#fff',
    }
  }

  const previewPropsUsingIcon: IDocumentCardPreviewProps = {
    previewImages: [
      {
        previewIconProps: {
          iconName: 'OpenFile',
          styles: { root: { fontSize: fonts.superLarge.fontSize, color: palette.white } },
        },
        width: 44,
      },
    ],
    styles: { previewIcon: { backgroundColor: palette.themePrimary } },
  };

  return (
    <div style={classesStyle}>
      <div style={classesContentStyle}>
        <div style={classComponentStyle}>
          <Stack 
            horizontal
            wrap 
            styles={stackStyles} 
            tokens={themedLargeStackTokens}
            horizontalAlign="end"
            verticalAlign="space-between"
          >
            <DocumentCard
              type={DocumentCardType.compact}
              onClick={(e) => handleSidebar(e)}
              styles={documentCardStyles}
            >
              <DocumentCardDetails styles={documentCardDetailsStyles}>
                <DocumentCardTitle styles={documentCardTitleStyles} title="CS1101" shouldTruncate />
              </DocumentCardDetails>
            </DocumentCard>

            <DocumentCard
              type={DocumentCardType.compact}
              onClick={(e) => handleSidebar(e)}
              styles={documentCardStyles}
            >
              <DocumentCardDetails>
                <DocumentCardTitle styles={documentCardTitleStyles} title="CS201" shouldTruncate />
              </DocumentCardDetails>
            </DocumentCard>

            <DocumentCard
              type={DocumentCardType.compact}
              onClick={(e) => handleSidebar(e)}
              styles={documentCardStyles}
            >
              <DocumentCardDetails>
                <DocumentCardTitle styles={documentCardTitleStyles} title="CS1101" shouldTruncate />
              </DocumentCardDetails>
            </DocumentCard>

            <DocumentCard
              type={DocumentCardType.compact}
              onClick={(e) => handleSidebar(e)}
              styles={documentCardStyles}
            >
              <DocumentCardDetails>
                <DocumentCardTitle styles={documentCardTitleStyles} title="CS1101" shouldTruncate />
              </DocumentCardDetails>
            </DocumentCard>

            <DocumentCard
              type={DocumentCardType.compact}
              onClick={(e) => handleSidebar(e)}
              styles={documentCardStyles}
            >
              <DocumentCardDetails>
                <DocumentCardTitle styles={documentCardTitleStyles} title="CS1101" shouldTruncate />
              </DocumentCardDetails>
            </DocumentCard>
            <DocumentCard
              type={DocumentCardType.compact}
              onClick={(e) => handleSidebar(e)}
              styles={documentCardStyles}
            >
              <DocumentCardDetails>
                <DocumentCardTitle styles={documentCardTitleStyles} title="CS1101" shouldTruncate />
              </DocumentCardDetails>
            </DocumentCard>

            <DocumentCard
              type={DocumentCardType.compact}
              onClick={(e) => handleSidebar(e)}
              styles={documentCardStyles}
            >
              <DocumentCardDetails>
                <DocumentCardTitle styles={documentCardTitleStyles} title="CS1101" shouldTruncate />
              </DocumentCardDetails>
            </DocumentCard>
            <DocumentCard
              type={DocumentCardType.compact}
              onClick={(e) => handleSidebar(e)}
              styles={documentCardStyles}
            >
              <DocumentCardDetails>
                <DocumentCardTitle styles={documentCardTitleStyles} title="CS1101" shouldTruncate />
              </DocumentCardDetails>
            </DocumentCard>
        {
          showSidebar ?
          <div style={sidebarStyle}>
          </div>
          :
          null
        }
        <div>
    </div>
          </Stack>
        </div>
      </div>
    </div>
  )
}

export default Classes;