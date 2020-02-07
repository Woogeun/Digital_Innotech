import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom';
import logo from 'assets/mmc_logo.png'

var imageSrc = {
	backgroundImage: `url(${logo})`,
}

class Logo extends Component {
	
	render () {
		return (
			<div className='logo-box'>
				<div className='center'>
					<img src={logo} className='logo'/>	
				</div>
			</div>
		);
	}
}

export default Logo
