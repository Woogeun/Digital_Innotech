import React, { useState, useEffect }  	from 'react';
import PropTypes            			from 'prop-types';

import { makeStyles, useTheme }	from '@material-ui/core/styles';
import List 					from '@material-ui/core/List';
import Grid 					from '@material-ui/core/Grid';
import Paper 					from '@material-ui/core/Paper';
import Typography 				from '@material-ui/core/Typography';
	
import HistoryPost 		from 'components/post/HistoryPost';
import { requestServer } 	from 'requestServer.js';
import TextEditor 		from 'components/form/TextEditor';
import HistoryEditor 	from 'components/form/HistoryEditor';
import HistoryAdder 	from 'components/form/HistoryAdder';


const useStyles = makeStyles(theme => ({
	root: {
		width: '100%'
	},
	list: {
		minHeight: 100,
		maxWidth: 800,
		padding: theme.spacing(4)
	},
	title: {
		height: 100,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		borderBottom: `1px solid ${theme.palette.divider}`,

	},
}));

export default function History(props) {
	const classes = useStyles();
	const [histories, setHistories] = useState({list_of_json: []});
	const [title, setTitle] 		= useState(null);

	useEffect(requestServer('about/history', 'history', 'json', setHistories), []);
	useEffect(requestServer('about/history', 'title', 'text', setTitle), []);

	return (
		<Grid container justify='center' className={ classes.root } spacing={2}>
			<Grid item xs={12} >
				<TextEditor content={title} session='about/history' data='title' type='text' />
			</Grid>
			{ histories.list_of_json.map((history, i) => {
				return (
					
					<HistoryEditor history={history} session='about/history' data='history' type='json' />
				);
			})}
			<HistoryAdder session='about/history' data='history' type='json' />
		</Grid>
	);
}

History.defaultProps = {

};

History.propTypes = {

};