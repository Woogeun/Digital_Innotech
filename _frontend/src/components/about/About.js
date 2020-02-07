import React, { Component } from 'react'
import { NavLink, Link, Route, Switch } from 'react-router-dom';
import CEO from 'components/about/CEO'
import Career from 'components/about/Career'
import Button from 'components/Button'

class About extends Component {
	render () {
		return (
			<div className='about'>
				<div className='title'>
					About
				</div>
				<div className='container'>

					<div className='navigator'>

						<div className='button-box'>
							{ this.props.subAbout.map((subText, i) => {
								return (
									<Button text={ subText } />
								);
							})}
						</div>
					</div>
					<Switch>
						<Route path='/About/Career' component={Career} />
						<Route path='/About/CEO' component={CEO} />
						{/*<Route path='Career' component={Career} />*/}
					</Switch>
				</div>
			</div>
		);
	}
}

export default About
