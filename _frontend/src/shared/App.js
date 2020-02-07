import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { Home, About } from 'pages';
// import Menu from 'components/Menu';
import Header from 'components/Header';
import Body from 'components/Body';
import Footer from 'components/Footer';


class App extends Component {
	constructor (props) {
		super(props);

		this.state = {
			subAbout: ["CEO", "Career", "Sample"]
		};
	}

	render() {
		return (
			<div>
				
					<Header subAbout={ this.state.subAbout } />

					<Body subAbout={ this.state.subAbout } />

					{/*<Menu/>
					<h1>{this.props.data}</h1>
					<Route exact path="/" component={Home}/>
					<Switch>
						<Route path="/about/:name" component={About}/>
						<Route path="/about" component={About}/>
					</Switch>*/}




					<Footer/>
			</div>
		);
	}
}

App.propTypes = {
    data: PropTypes.string.isRequired
};

export default App;