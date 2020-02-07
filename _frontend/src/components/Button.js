import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom';

class Button extends Component {
	constructor (props) {
		super(props);

		this.state = {
			activeStyle: { color: 'black', backgroundColor: 'rgba(0,0,0,0.2)'}
		}
	}

	render () {
		return (
			<NavLink to={ this.props.text } activeStyle={ this.state.activeStyle } style={{ textDecoration: 'none' }}>
				<div className="button">
					<div className="button-content center">
						{ this.props.text }
					</div>
				</div>
			</NavLink>
		);
	}
}

export default Button
