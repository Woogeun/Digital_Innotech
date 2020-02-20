import React, { useState, useEffect }  	from 'react';
import PropTypes            			from 'prop-types';

import { makeStyles }	from '@material-ui/core/styles';
import Card 			from '@material-ui/core/Card';

import requestServer	from 'requestServer';


const useStyles = makeStyles(theme => ({
	card: {
		backgroundColor: '#FAFAFA',
		margin: theme.spacing(2, 0),
		display: 'flex',
		minHeight: 300,
		width: '100%',
	},
	media: {
		
	},
}));

export default function TextEditor(props) {
	const classes = useStyles();
	const [home, setHome] = useState(null);

	useEffect(requestServer('about', 'home', 'image', setHome), []);

	return (
		<React.Fragment>
			<Card 
			elevation={0}
			className={classes.card}>
				<CardMedia
					component="img"
					className={classes.media}
					image={home}/>
			</Card>
		</React.Fragment>
	);
}

TextEditor.defaultProps = {

};

TextEditor.propTypes = {

};
