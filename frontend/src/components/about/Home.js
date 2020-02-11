import React, { useState }  from 'react';
import PropTypes            from 'prop-types';

import { makeStyles, useTheme }	from '@material-ui/core/styles';
import Card 					from '@material-ui/core/Card';
import CardMedia 				from '@material-ui/core/CardMedia';

import mainImg from 'assets/home.png';


const useStyles = makeStyles(theme => ({
	card: {
		backgroundColor: '#FAFAFA',
		margin: theme.spacing(2, 0),
		display: 'flex',
		minHeight: 300,
		width: '100%',
	},
	media: {
		// opacity: '40%',
		// width: '50%',// 16:9
	},
}));

export default function Home(props) {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<React.Fragment>
			<Card 
			elevation={0}
			className={classes.card}>
				<CardMedia
					component="img"
					className={classes.media}
					image={mainImg}
					title="Live from space album cover"/>
			</Card>
		</React.Fragment>
	);
}

Home.defaultProps = {

};

Home.propTypes = {

};
