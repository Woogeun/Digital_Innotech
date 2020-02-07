import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom';

class FloatingBox extends Component {
	constructor (props) {
		super(props);

		this.state = {
			activeStyle: { color: 'white'}
		}
	}

	render () {
		return (
			<div className='floating-box'>
				{ this.props.subText.map((text, i) => {
					return (
						<div className='container'>
							<a href={ "/About/" + text } style={{ textDecoration: 'none' }}>
								<div className='floating-text'>
									{ text }
								</div>
							</a>
						</div>
					);
				})}
			</div>
		);
	}
}

export default FloatingBox
