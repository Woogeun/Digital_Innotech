import React, { useState, useEffect }  	from 'react';
import PropTypes            			from 'prop-types';

import { makeStyles, useTheme }	from '@material-ui/core/styles';
import List 			from '@material-ui/core/List';
import Grid 			from '@material-ui/core/Grid';

import history from 'data/history.js';
import HistoryPost from 'components/post/HistoryPost';
import requestServer 	from 'requestServer';


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
	const [histories, setHistories] = useState({list_of_json: []});

	useEffect(requestServer('about/history', 'history', 'json', setHistories), []);

	return (
		<Grid container justify='center'>
			<List className={ classes.list }>
				{ histories.list_of_json.map((history, i) => {
					return (
						<HistoryPost history={ history } order={i}/>
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