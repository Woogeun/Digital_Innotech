import React, { Component } from 'react'
import { NavLink, Link, Route, Switch } from 'react-router-dom';
import About from 'components/about/About';
import Home from 'components/about/Home';
import Members from 'components/about/Members';
import Contact from 'components/about/Contact';
import Research from 'components/about/Research';
import CTO from 'components/about/CTO';

class Body extends Component {
	render () {
		return (
			<div className="body">
				<div className='content'>
					<div className='container'>
						<Switch>
							{/*<Route path="/about" component={() => <About subAbout={ this.props.subAbout } />} />
							<Route path="/solution" component={Members} />
							<Route path="/forensics" component={Contact} />*/}
							<Route exact path="/message" component={() => <CTO />} />
							<Route exact path="/" component={() => <Home />} />
						</Switch>
					</div>
				</div>
			</div>
		);
	}
}

export default Body
