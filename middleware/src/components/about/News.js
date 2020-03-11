import React, { useState, useEffect }  	from 'react';
import PropTypes            			from 'prop-types';

import { makeStyles, useTheme }	from '@material-ui/core/styles';
import { deepPurple }			from '@material-ui/core/colors';
import { Grow } 				from '@material-ui/core';
import Box 				from '@material-ui/core/Box';
import Grid           	from '@material-ui/core/Grid';
import Paper           	from '@material-ui/core/Paper';
import Typography       from '@material-ui/core/Typography';

import TextPost 		from 'components/post/TextPost';
import requestServer 	from 'requestServer';
import TextEditor 		from 'components/form/TextEditor';
import HistoryEditor 	from 'components/form/HistoryEditor';
import HistoryAdder 	from 'components/form/HistoryAdder';


const useStyles = makeStyles(theme => ({
	root: {
		
	},
	info: {
		minHeight: 400,
		maxWidth: 250,
		padding: theme.spacing(1),
	},
	yearText: {
		fontSize: 20,
		color: theme.palette.getContrastText(deepPurple[500]),
		backgroundColor: deepPurple[500],
		textAlign: 'center',
		opacity: '70%'
	},
	box: {
		height: '100%',
		padding: theme.spacing(1),
	},
	descriptionText: {
		fontFamily: 'Raleway',
		fontSize: 17,
		color: '#323232'
	},
	title: {
		height: 100,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		borderBottom: `1px solid ${theme.palette.divider}`,

	},
}));

export default function News(props) {
	const classes = useStyles();
	const [news, setNews] 	= useState({list_of_json: []});
	const [title, setTitle] = useState(null);

	useEffect(requestServer('about/news', 'news', 'json', setNews), []);
	useEffect(requestServer('about/news', 'title', 'text', setTitle), []);

	return (
		<Grid 
		container 
		justify='center' 
		spacing={2}
		className={ classes.root }>
			<Grid item xs={12} >
				<TextEditor content={title} session='about/news' data='title' type='text' />
			</Grid>
			{ news.list_of_json.map((obj, i) => {
				return (
					<HistoryEditor history={ obj } session='about/news' data='news' type='json' />
				);
			})}
			<HistoryAdder session='about/news' data='news' type='json' />
		</Grid>

	);
}

News.defaultProps = {

};

News.propTypes = {

};
