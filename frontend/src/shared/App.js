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
			sections: [
				{
					title: "회사 소개",
					url: "/about",
					subSections: [
						{
							title: "CTO 메세지",
							url: "/message"
						}, 
						{
							title: "회사 연혁",
							url: "/history"
						}, 
						{
							title: "회사 소개 자료",
							url: "/introduction"
						}, 
						{
							title: "소식",
							url: "/news"
						}, 
					]
				},
				{
					title: "소프트웨어 솔루션",
					url: "/solution",
					subSections: [
						{
							title: "KAI_Forensics 2.0",
							url: "/kaiForensics"
						}
					]
				},
				{
					title: "영상/동영상 포렌식 기술이란?",
					url: "/forensics",
					subSections: [
						{
							title: "영상/동영상 포렌식 기술이란?",
							url: "/technique"
						}, 
						{
							title: "CTO 메세지",
							url: "/papers"
						}
					]
				}
			]
		};
	}

	render() {
		return (
			<div>
				
				<Header 
					sections={this.state.sections}
					
				/>

				<Body sections={ this.state.sections } />

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