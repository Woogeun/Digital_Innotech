import React, { useState, useEffect }  	from 'react';
import PropTypes            			from 'prop-types';

import { makeStyles }	from '@material-ui/core/styles';
import Grid 			from '@material-ui/core/Grid';
import Paper 			from '@material-ui/core/Paper';
import Typography 		from '@material-ui/core/Typography';
import Card 			from '@material-ui/core/Card';
import CardMedia 		from '@material-ui/core/CardMedia';

import requestServer	from 'requestServer';


const useStyles = makeStyles(theme => ({
	title: {
		height: 100,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		borderBottom: `1px solid ${theme.palette.divider}`,

	},
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

export default function Temp(props) {
	const classes = useStyles();
	const [title, setTitle] = useState(null);
	const [img, setImg] = useState(null);

	useEffect(requestServer('appSolution/temp', 'title', 'text', setTitle), []);
	useEffect(requestServer('appSolution/temp', 'img', 'image', setImg), []);

	return (
		<Grid container justify='center' className={ classes.root } spacing={2}>
			<Grid item xs={12} >
				<Paper square elevation={.1} className={ classes.title }>
					<Typography align='center' variant='h6'>
						{ title }
					</Typography>
				</Paper>
			</Grid>
			<Card 
			elevation={0}
			className={classes.card}>
				<CardMedia
					component="img"
					className={classes.media}
					image={img}/>
			</Card>
		</Grid>
	);
}

Temp.defaultProps = {

};

Temp.propTypes = {

};
