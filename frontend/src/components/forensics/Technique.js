import React, { useState }  from 'react';
import PropTypes            from 'prop-types';

import { makeStyles, useTheme }	from '@material-ui/core/styles';
import { deepPurple }			from '@material-ui/core/colors';
import { Grow } 				from '@material-ui/core';
import Card           	from '@material-ui/core/Card';
import CardMedia           	from '@material-ui/core/CardMedia';
import Divider      	from '@material-ui/core/Divider';
import Grid           	from '@material-ui/core/Grid';
import Paper           	from '@material-ui/core/Paper';
import Typography       from '@material-ui/core/Typography';

import forensicsImg from 'assets/forensics.png';
import forensicsInfo from 'data/forensics.js'


const useStyles = makeStyles(theme => ({
	media: {
		width: '100%',
		opacity: '80%'
	},
	info: {
		minHeight: 400,
		paddingTop: theme.spacing(1),
		// backgroundColor: 'gray'
	},
	content: {
		padding: theme.spacing(1),
		// backgroundColor: 'gray'
	},
	title: {
		fontFamily: 'Raleway',
		fontSize: 22,
		color: '#323232',
		textAlign: 'center'
	},
	detail: {
		fontFamily: 'Raleway',
		fontSize: 17,
		color: '#323232'
	}
}));

export default function Technique(props) {
	const classes = useStyles();
	const theme = useTheme();
	
	return (
		<React.Fragment>
			<Card>
				<CardMedia
				component="img"
				className={classes.media}
				image={forensicsImg}
				title="Live from space album cover"/>
			</Card>
			<Grid
			container
			spacing={2}
			className={ classes.info }>
				<Grid item xs={6} >
					<Paper elevation={1} className={ classes.content }>
						<Typography className={ classes.title }>
							why
						</Typography>
						<Typography className={ classes.detail }>
							{ forensicsInfo.why }
						</Typography>
					</Paper>
				</Grid>
				<Grid item xs={6} >
					<Paper elevation={1} className={ classes.content }>
						<Typography className={ classes.title }>
							how
						</Typography>
						<Typography className={ classes.detail }>
							{ forensicsInfo.how }
						</Typography>
					</Paper>
				</Grid>
				<Grid item xs={12} >
					<Paper elevation={1} className={ classes.content }>
						<Typography className={ classes.title }>
							now
						</Typography>
						<Typography className={ classes.detail }>
							{ forensicsInfo.now.split('\n').map(detail => {
								return (
									<span>{detail}<br/></span>
								);
							})}
						</Typography>
					</Paper>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}

Technique.defaultProps = {

};

Technique.propTypes = {

};
