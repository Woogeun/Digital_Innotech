import React, { useState }  from 'react';
import PropTypes            from 'prop-types';

import { makeStyles, useTheme }	from '@material-ui/core/styles';
import List 			from '@material-ui/core/List';
import Grid 			from '@material-ui/core/Grid';

import history from 'data/history.js';
import HistoryPost from 'components/post/HistoryPost';


const useStyles = makeStyles(theme => ({
	list: {
		minHeight: 100,
		maxWidth: 800,
		padding: theme.spacing(4)
	},
}));



export default function History(props) {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<Grid container justify='center'>
			<List className={ classes.list }>
				{ history.map((content, i) => {
					return (
						<HistoryPost content={content} order={i}/>
					);
				})}
			</List>
		</Grid>
	);
}

History.defaultProps = {

};

History.propTypes = {

};