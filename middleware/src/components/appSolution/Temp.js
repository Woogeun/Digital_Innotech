import React, { useState, useEffect }  	from 'react';
import PropTypes            			from 'prop-types';

import { makeStyles }	from '@material-ui/core/styles';
import Grid 			from '@material-ui/core/Grid';
import Paper 			from '@material-ui/core/Paper';
import Typography 		from '@material-ui/core/Typography';

import { requestServer } 	from 'requestServer.js';
import TextEditor 		from 'components/form/TextEditor';


const useStyles = makeStyles(theme => ({
	title: {
		height: 100,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		borderBottom: `1px solid ${theme.palette.divider}`,

	},
}));

export default function Temp(props) {
	const classes = useStyles();
	const [title, setTitle] = useState(null);

	useEffect(requestServer('appSolution/temp', 'title', 'text', setTitle), []);

	return (
		<Grid container justify='center' className={ classes.root } spacing={2}>
			<Grid item xs={12} >
				<TextEditor content={title} session='appSolution/temp' data='title' type='text' />
			</Grid>
			<Grid>
				Nothing on it.
			</Grid>
		</Grid>
	);
}

Temp.defaultProps = {

};

Temp.propTypes = {

};
