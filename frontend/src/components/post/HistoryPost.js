import React, { useState } 	from 'react';
import PropTypes 			from 'prop-types';

import { makeStyles } 			from '@material-ui/core/styles';
import { Grow } 				from '@material-ui/core';
import { deepPurple }			from '@material-ui/core/colors';

import Avatar 			from '@material-ui/core/Avatar';
import Divider      	from '@material-ui/core/Divider';
import Grid           	from '@material-ui/core/Grid';

import ListItem 		from '@material-ui/core/ListItem';
import ListItemText 	from '@material-ui/core/ListItemText';
import ListItemAvatar 	from '@material-ui/core/ListItemAvatar';
import Typography       from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
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

const growStyles = (order => {
	return ({
		direction: 'up',
		in: true,
		style: { 'transformOrigin': '-1' },
		timeout: 300 * (order + 1)
	});
});

export default function HistoryPost(props) {
	const classes = useStyles();
	const { content, order } = props;

	return (
		<React.Fragment>
			<Grow {...growStyles(order)}>
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
						<Grow {...growStyles(i)}>
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
}

HistoryPost.defaultProps = {
	
};

HistoryPost.propTypes = {
	content: PropTypes.shape({
		year: PropTypes.string,
		description: PropTypes.array
	}),
	order: PropTypes.number
};
