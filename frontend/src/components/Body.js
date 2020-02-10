import React, { Component } from 'react'
import { NavLink, Link, Route, Switch } from 'react-router-dom';
import Home from 'components/about/Home';
import CTO from 'components/about/CTO';
import History from 'components/about/History';
import Introduction from 'components/about/Introduction';

class Body extends Component {
	render () {
		return (
			<div className="body">
				<div className='content'>
					<div className='container' class='_body_'>
						<Switch>
							{/*<Route path="/about" component={() => <About subAbout={ this.props.subAbout } />} />
							<Route path="/solution" component={Members} />
							<Route path="/forensics" component={Contact} />*/}
							<Route exact path="/" component={() => <Home />} />
							
							<Route exact path="/message" component={() => <CTO />} />
							<Route exact path="/history" component={() => <History />} />
							<Route exact path="/introduction" component={() => <Introduction />} />

							
						</Switch>
					</div>
				</div>
			</div>
		);
	}
}

export default Body
