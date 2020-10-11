import React from "react";
import { Link, Route } from "wouter";

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
	// width: '50vw',
	// backgroundColor: 'green',
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
	return (
		<div style={headerStyle}>
			<div style={leftSideStyle}>
				<h1>VandyCS</h1>
			</div>
			<div style={rightSideStyle}>
				<Link href="/">
					<a className="link" style={navLinkStyle}>home</a>
				</Link>
				<Link href="/about">
					<a className="link" style={navLinkStyle}>about</a>
				</Link>
				<Link href="/classes">
					<a className="link" style={navLinkStyle}>classes</a>
				</Link>
			</div>

		</div>
	)
}

export default Header;