// Dependencies
import React, { Component } from 'react';


// Assets
import './css/Header.css';
import SideNav from "./SideNav";
class Header extends Component {

	render() {

		return (
			<div className="Header">
			<SideNav />
			</div>
		);

	}
	
}

export default Header;
