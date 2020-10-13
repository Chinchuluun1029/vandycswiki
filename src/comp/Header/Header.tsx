import React from "react";
import { Link } from "wouter";

import COLORS from "../../constants/colors";


const headerStyle: any = {
	backgroundColor: COLORS.darkGray,
	padding: '1.2em',
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	fontFamily: "Courier New",
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
	color: COLORS.cyan,
	marginRight: '2em',
	textDecoration: 'none',
	fontSize: '1.6em',
}


const Header = () => {
	const links = ["home", "about", "classes"];
	return (
		<div style={headerStyle}>
			<div style={leftSideStyle}>
				<h1>VandyCS</h1>
			</div>
			<div style={rightSideStyle}> 
				{links.map(link => {
						link = link.toString().toLowerCase();
						return (
							<Link href={`/${link.toString()}`}>
								<a className="link" style={navLinkStyle}>{link.toString()}</a>
							</Link>
					)})}
			</div>
		</div>
	)
}

export default Header;