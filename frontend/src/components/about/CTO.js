import React, { useState }  from 'react';
import PropTypes          	from 'prop-types';

import { makeStyles, useTheme }	from '@material-ui/core/styles';
import { Grow } 				from '@material-ui/core';
import Grid       		from '@material-ui/core/Grid';
import Paper 			from '@material-ui/core/Paper';
import Typography     	from '@material-ui/core/Typography';

import Career 			from 'data/career.js';
import Greeting 		from 'data/greeting.js';
import profileImg 		from 'assets/profile.png';
import TextPost 		from 'components/post/TextPost';
import YearDetailPost 	from 'components/post/YearDetailPost';


const useStyles = makeStyles(theme => ({
	container: {
		minHeight: 100,
		height: '100%'
	},
	column1: {
		width: '100%',
		// height: '100%'
	},
	profile: {
		padding: theme.spacing(0),
		// width: '50%',
		// height: '100%'
	},
	career: {
		padding: theme.spacing(1),
		height: '100%',
	},
	careerText: {
		fontFamily: 'Raleway',
		color: '#323232'
	},
	greeting: {
		height: '95.5%',
		padding: theme.spacing(2),
	},
	greetingText: {
		fontFamily: 'Raleway',
		// fontSize: 17,
		color: '#323232'
	},
	details: {
		ontFamily: 'Raleway',
		// fontSize: 11,
		color: '#323232'
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
			spacing={2} >
				<Grid 
					container
					item
					xs={5}
					direction='column'
					className={ classes.column1 }
					spacing={2}>
					<Grid container item align='center' justify='center' >
						<Grid item>
							<Paper square className={ classes.profile }>
								<img src={profileImg}  />
							</Paper>
						</Grid>
					</Grid>
					<Grid item >
						<Paper elevation={2}  className={ classes.career } >
							<Typography>
								이흥규
							</Typography>
							<br/>
							<Typography className={ classes.careerText } variant='subtitle2'>
								교육
							</Typography>
							<YearDetailPost yearDetail={ Career.education } type='caption'/>
							<br/>
							<Typography className={ classes.careerText } variant='subtitle2'>
								경력
							</Typography>
							<YearDetailPost yearDetail={ Career.details } type='caption'/>
						</Paper>
					</Grid>
				</Grid>
				<Grid item xs className={ classes.column2 }>
					<Paper className={ classes.greeting } elevation={2}>
						<Typography variant='subtitle1'>
							기술자문/창업자 메시지
						</Typography>
						<br/>
						<TextPost content={ Greeting } doubleBreak={true} type='body1'/>
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
