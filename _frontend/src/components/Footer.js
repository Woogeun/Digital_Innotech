import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom';
import Logo from 'components/Logo'
import Foot from 'assets/dark_banner1.jpg'

class Footer extends Component {
	state = {
		contact: ""
	};

	async componentDidMount() {
        try {
            const res = await fetch('http://127.0.0.1:8000/footer/');
            const contact = await res.text();
            this.setState({
                contact: contact
            });
        } catch (e) {
            console.log(e);
        }
    }

	render () {
		return (
			<div className="footer"> 
				<div className="image-box">
					<img src={Foot} className='background'/>
					<div className='white-box'/>
				</div>
				<div className="content">
					<div className="contact">
						<Logo />
						<div className='license-box'>
							<div className='black-box' />
							<div className='license center'>
								{/*2F #201, Daejeon-ro 1092, Daedeok-gu, Daejeon, South Korea 34433<br/>
								Tel. +82-42-365-9046 Email. contact@vpluslab.kr<br/>
								COPYRIGHT © 2019 V PLUS LAB INC. ALL RIGHTS RESERVED.*/}
								<form>
									<label>
										<input type="text" name="name" value={this.state.contact} />
									</label>
									<input type="submit" value="Submit" />
								</form>
								{ this.state.contact.split('\n').map( (line,i) => {
									return (<span>{ line }<br/></span>);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Footer
