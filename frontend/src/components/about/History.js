import React, { useState }  from 'react';
import PropTypes            from 'prop-types';

import { makeStyles, useTheme }	from '@material-ui/core/styles';
import { deepPurple }			from '@material-ui/core/colors';
import { Grow } 				from '@material-ui/core';
import Avatar 			from '@material-ui/core/Avatar';
import Divider      	from '@material-ui/core/Divider';
import Grid           	from '@material-ui/core/Grid';
import List 			from '@material-ui/core/List';
import ListItem 		from '@material-ui/core/ListItem';
import ListItemText 	from '@material-ui/core/ListItemText';
import ListItemAvatar 	from '@material-ui/core/ListItemAvatar';
import Typography       from '@material-ui/core/Typography';

import history from 'data/history.js';


const useStyles = makeStyles(theme => ({
	list: {
		minHeight: 100,
		maxWidth: 800,
		padding: theme.spacing(4)
	},
	yearText: {
		fontSize: 20,
		color: theme.palette.getContrastText(deepPurple[500]),
		backgroundColor: deepPurple[500],
		width: 75,
		height: 75,
		marginRight: theme.spacing(2)
	},
	listItem: {
		marginBottom: theme.spacing(2),
		marginTop: theme.spacing(2)
	},
	descriptionText: {
		fontFamily: 'Raleway',
		fontSize: 17,
		color: '#323232'
	}
}));

export default function History(props) {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<List className={ classes.list }>
			{ history.map((content, i) => {
				var delay = 300 * (i+1);
				return (

					<React.Fragment>
						<Grow 
						direction='up' 
						in={true}  
						style={{ 
							transformOrigin: '-1',
						}}
						{...({ timeout: delay })}>
						<ListItem className={ classes.listItem }>
							<ListItemAvatar>
								<Avatar className={ classes.yearText }>
									{ content.year }
								</Avatar>
							</ListItemAvatar>
							<ListItemText >
								<Typography align='right' className={ classes.descriptionText }>
									{ content.description[0] }
								</Typography>
							</ListItemText>
						</ListItem>
						</Grow>
						{ content.description.map((details, i) => {
							if (i != 0) {
								return (
									<Grow 
									direction='up' 
									in={true}  
									style={{ 
										transformOrigin: '0 0 0',
									}}
									{...({ timeout: delay })}>
									<ListItem className={ classes.listItem }>
										<ListItemText inset >
											<Typography inset align='right' className={ classes.descriptionText }>
												{details}
											</Typography>
										</ListItemText>
									</ListItem>
									</Grow>
								);
							}
						})}
						<Divider variant='middle' compoment='li'/>
					
					</React.Fragment>
				);
			})}
		</List>
	);
}

History.defaultProps = {

};

History.propTypes = {

};