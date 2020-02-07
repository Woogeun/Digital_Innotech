import React, { Component } from 'react'
import { NavLink, Link, Route, Switch } from 'react-router-dom';
import About from 'components/about/About';

class Body extends Component {
	render () {
		return (
			<div className="body">
				<div className='content'>
					<div className='container'>
						<Route path="/about" component={() => <About subAbout={ this.props.subAbout } />} />
						{/*<Route exact path="/about" component={About}/>*/}
						{/*<Route exact path="/about" component={About}/>*/}
					</div>
				</div>
			</div>
		);
	}
}

export default Body
