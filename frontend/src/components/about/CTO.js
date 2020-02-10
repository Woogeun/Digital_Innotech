import React, { useState }  from 'react';
import PropTypes          	from 'prop-types';

import { makeStyles, useTheme }	from '@material-ui/core/styles';
import Grid       		from '@material-ui/core/Grid';
import Paper 			from '@material-ui/core/Paper';
import Typography     	from '@material-ui/core/Typography';

import Career 		from 'data/career.js';
import Greeting 	from 'data/greeting.js';
import profileImg 	from 'assets/profile.png';


const useStyles = makeStyles(theme => ({
	container: {
		minHeight: 100,
	},
	profile: {
		padding: theme.spacing(4),
		width: '50%',
	},
	career: {
		padding: theme.spacing(1),
		height: '100%',
	},
	careerText: {
		fontFamily: 'Raleway',
		fontSize: 11,
		color: '#323232'
	},
	greeting: {
		height: '100%',
		padding: theme.spacing(2),
	},
	greetingText: {
		fontFamily: 'Raleway',
		fontSize: 17,
		color: '#323232'
	},
	details: {
		display: 'flex',
		flexDirection: 'column',
	},
}));

export default function CTO(props) {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<React.Fragment>
			<Grid 
			container 
			justify='center'
			className={ classes.container } 
			spacing={2}>
				<Grid 
					container
					item
					xs={5}
					direction='column'
					wrap='nowrap'
					spacing={2}>
					<Grid item xs justify='center'>
						<img src={profileImg} className={ classes.profile } />
					</Grid>
					<Grid item xs >
						<Paper elevation={3}  className={ classes.career }>
							<Typography align='left' className={ classes.careerText }>
							교육
							<br/>
							{
								Career.education.map( content => {
									return (<span>{ content.year } : { content.description }<br/></span>);
							})}
							<br/>
							경력
							<br/>
							{
								Career.details.map( content => {
									return (<span>{ content.year } : { content.description }<br/></span>);		
							})}
							</Typography>
						</Paper>
					</Grid>
				</Grid>
				<Grid item xs >
					<Paper className={ classes.greeting } elevation={3}>
						<Typography align='left' className={ classes.greetingText }>
							{
								Greeting.split('\n').map( content => {
									return (<span>{content}<br/></span>);
						})}
						</Typography>
					</Paper> 
				</Grid>
			</Grid>
		</React.Fragment>
	);
}

CTO.defaultProps = {
	
};

CTO.propTypes = {
	
};
