import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from 'shared/App';

class Root extends Component {
	render() {
		return (
			<Router>
        		<App data={this.props.data}/>
    		</Router>
    	)
	}
}

export default Root;