import React, { useState, useEffect }  	from 'react';
import PropTypes 						from 'prop-types';
import { Route, Switch, Redirect }		from 'react-router-dom';

import { makeStyles } 	from '@material-ui/core/styles';
import Grid 			from '@material-ui/core/Grid';
import Paper 			from '@material-ui/core/Paper';
import Typography 		from '@material-ui/core/Typography';

import Home 			from 'components/Home';
import CTO 				from 'components/about/CTO';
import History 			from 'components/about/History';
import Introduction 	from 'components/about/Introduction';
import News 			from 'components/about/News';
import KAI_Forensics 	from 'components/pcSolution/KAI_Forensics';
import Temp 			from 'components/appSolution/Temp';
import Technique 		from 'components/forensics/Technique';
import Papers 			from 'components/forensics/Papers';
import Contact 			from 'components/Contact';


import { requestServer } 	from 'requestServer.js';


const useStyles = makeStyles(theme => ({
	root: {
		margin: 0,
		padding: 0,
		minWidth: 1024,
		minHeight: 100,
	},
	title: {
		height: 100,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		borderBottom: `1px solid ${theme.palette.divider}`,

	},
	text: {
		color: '#444444'
	},
	container: {
		padding: 10,
	}
}));


export default function Body(props) {
	const classes = useStyles();

	return (
		<Grid container justify='center' className={ classes.root } spacing={2}>
			<Grid item xs={8} className={ classes.container }>
				<Switch>
					<Route exact path="/">
						<Redirect to="/innotech" />
					</Route>

					<Route exact path="/innotech" 				component={() => <Home />} />
					
					<Route exact path="/innotech/cto" 			component={() => <CTO />} />
					<Route exact path="/innotech/history" 		component={() => <History />} />
					<Route exact path="/innotech/introduction" 	component={() => <Introduction />} />
					<Route exact path="/innotech/news" 			component={() => <News />} />

					<Route exact path="/innotech/kaiForensics" 	component={() => <KAI_Forensics />} />
					<Route exact path="/innotech/temp" 			component={() => <Temp />} />

					<Route exact path="/innotech/technique" 	component={() => <Technique />} />
					<Route exact path="/innotech/papers" 		component={() => <Papers />} />

					<Route exact path="/innotech/contact" 		component={() => <Contact />} />
				</Switch>
			</Grid>

		</Grid>
	);	
}

Body.defaultProps = {

};

Body.propTypes = {
	
};
