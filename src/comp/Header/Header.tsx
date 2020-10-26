import React from "react";
import { Link } from "wouter";

import THEME from "../../constants/colors";

import LINKS from "../../constants/links";


const headerStyle: any = {
	backgroundColor: THEME.palette.black,
	padding: '1.2em',
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	fontFamily: 'Courier New',
	fontWeight: 700,
}

const leftSideStyle = {
}

const rightSideStyle = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-around',
}

const navLinkStyle = {
	color: THEME.palette.themePrimary,
	marginRight: '2em',
	textDecoration: 'none',
	fontSize: '1.6em',
	cursor: 'pointer',
}


const Header = () => {
	return (
		<div style={headerStyle}>
			<div style={leftSideStyle}>
				<h1>VandyCS</h1>
			</div>
			<div style={rightSideStyle}> 
				{LINKS.map(link => {
					link = link.toString().toLowerCase();
					return (
						<Link href={`/${link.toString()}`}>
							<span style={navLinkStyle}>{link.toString()}</span>
						</Link>
					)
				})}
			</div>
		</div>
	)
}

export default Header;