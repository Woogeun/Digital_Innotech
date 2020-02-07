import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom';
import FloatingBox from 'components/FloatingBox';


class MenuButton extends Component {
	constructor (props) {
		super(props);

		var url = 'none';
		if (props.text === 'About') {
			url = 'About/information';
		}
		else {
			url = props.text;
		}

		this.state = {
			url: '/' + url,
			visible1: false,
			visible2: false,
		}

		this.ShowBox1 = this.ShowBox1.bind(this);
		this.HideBox1 = this.HideBox1.bind(this);
		this.ShowBox2 = this.ShowBox2.bind(this);
		this.HideBox2 = this.HideBox2.bind(this);
	}

	ShowBox1() {
		this.setState({
			visible1: true
		});
	}

	HideBox1() {
		this.setState({
			visible1: false
		});
	}	

	ShowBox2() {
		this.setState({
			visible2: true
		});
	}

	HideBox2() {
		this.setState({
			visible2: false
		});
	}

	render () {
		return (
			<div className='container'>
				<a href={ this.state.url } style={{textDecoration: 'none'}}>
					<div className='menu-button' 
						onMouseEnter={ this.ShowBox1 } onMouseLeave={ this.HideBox1 }>
						<div className='menu-button-content center'>
							{ this.props.text }
						</div>
					</div>
				</a>
				<div onMouseEnter={ this.ShowBox2 } onMouseLeave={ this.HideBox2 } >
				{ this.state.visible1 || this.state.visible2 ? 
					<FloatingBox text={ this.props.text } subText={ this.props.subText } />  : null 
				}
				</div>

			</div>
		);
	}
}

export default MenuButton
