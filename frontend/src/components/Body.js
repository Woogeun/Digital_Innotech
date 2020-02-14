import React, { useState } 	from 'react';
import PropTypes 			from 'prop-types';
import { Route, Switch } 	from 'react-router-dom';

import { makeStyles } 	from '@material-ui/core/styles';
import Grid 			from '@material-ui/core/Grid';

import Home 			from 'components/Home';
import CTO 				from 'components/about/CTO';
import History 			from 'components/about/History';
import Introduction 	from 'components/about/Introduction';
import News 			from 'components/about/News';
import KAI_Forensics 	from 'components/solution/KAI_Forensics';
import Technique 		from 'components/forensics/Technique';
import Papers 			from 'components/forensics/Papers';


const useStyles = makeStyles(theme => ({
	root: {
		margin: 0,
		padding: 0,
		minWidth: 1024,
		minHeight: 100,
	},
	container: {
		padding: 10,
	}
}));


export default function Body(props) {
	const classes = useStyles();

	return (
		<Grid container justify='center' className={ classes.root }>
			<Grid item xs={8} className={ classes.container }>
				<Switch>
					<Route exact path="/" 				component={() => <Home />} />
					
					<Route exact path="/message" 		component={() => <CTO />} />
					<Route exact path="/history" 		component={() => <History />} />
					<Route exact path="/introduction" 	component={() => <Introduction />} />
					<Route exact path="/news" 			component={() => <News />} />

					<Route exact path="/kaiForensics" 	component={() => <KAI_Forensics />} />

					<Route exact path="/technique" 		component={() => <Technique />} />
					<Route exact path="/papers" 		component={() => <Papers />} />
				</Switch>
			</Grid>
		</Grid>
	);	
}

Body.defaultProps = {

};

Body.propTypes = {
	
};
