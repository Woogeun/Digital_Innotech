import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom';
// import logo from 'assets/mmc_logo.png'


class Logo extends Component {

	state = {
		logo: ""
	};

	async componentDidMount() {
		const server = 'http://127.0.0.1:8000/';
        try {
            const res = await fetch(server + 'header/');
            const logo = await res.blob();
			const url = URL.createObjectURL(logo);

            this.setState({
                logo: url
            });
            
        } catch (e) {
            console.log(e);
        }
    }
	
	render () {
		return (
			<div className='logo-box'>
				<div className='center'>
					<img src={ this.state.logo } className='logo'/>	
					{/*{ this.state.logo }*/}
				</div>
			</div>
		);
	}
}

export default Logo
