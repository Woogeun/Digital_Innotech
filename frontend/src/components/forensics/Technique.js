import React, { useState }  from 'react';
import PropTypes            from 'prop-types';

import { makeStyles, useTheme }	from '@material-ui/core/styles';
import { deepPurple }			from '@material-ui/core/colors';
import { sizing } 				from '@material-ui/system';
import Avatar 			from '@material-ui/core/Avatar';
import Box 				from '@material-ui/core/Box';
import Divider      	from '@material-ui/core/Divider';
import Grid           	from '@material-ui/core/Grid';
import Paper           	from '@material-ui/core/Paper';
import Typography       from '@material-ui/core/Typography';

import news from 'data/news.js';


const useStyles = makeStyles(theme => ({
	root: {

	},
	info: {
		minHeight: 400,
		padding: theme.spacing(1),
		// backgroundColor: 'gray'
	},
	yearText: {
		fontSize: 20,
		color: theme.palette.getContrastText(deepPurple[500]),
		backgroundColor: deepPurple[500],
		textAlign: 'center'
		// width: '100%',
		// marginRight: theme.spacing(2)
	},
	box: {
		height: '100%'
	},
	descriptionText: {
		fontFamily: 'Raleway',
		fontSize: 17,
		color: '#323232'
	}
}));

export default function Technique(props) {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<Grid 
		container 
		justify='center' 
		spacing={2}
		className={ classes.root }>
			{ news.map((content, i) => {
				return (
					<Grid 
					container
					item 
					xs={4}
					direction='column'>
						<Paper elevation={3} className={ classes.info }>
							<Grid item xs>
								<Typography item className={ classes.yearText }>
									{ content.year }
								</Typography>
							</Grid>
							<Grid item xs >
								<Box height='100%' className={ classes.box }>
									<Typography item className={ classes.descriptionText}>
										{ content.descriptions.map(description => {
											return (
												<span>{description}<br/><br/></span>
											);
										})}
									</Typography>
								</Box>
							</Grid>
						</Paper>
					</Grid>
					
				);
			})}
		</Grid>

	);
}

Technique.defaultProps = {

};

Technique.propTypes = {

};
