import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom';
import Logo from 'components/Logo'
import MenuButton from 'components/MenuButton'
import Head from 'assets/light_banner1.jpg'

class Header extends Component {

	render () {
		return (
			<div className="header">
				<div className="image-box">
					<img src={Head} className='background'/>
					<div className='white-box' />
				</div>
				<div className='content'>
					<div className='menu'>
						<a href={ "/" } style={{textDecoration: 'none'}}>
							<Logo />
						</a>
						<div className='menu-button-box'>
							<MenuButton text="About" subText={ this.props.subAbout }/>
							<MenuButton text="sample1" subText={[]}/>
							<MenuButton text="sample2" subText={[]}/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Header
