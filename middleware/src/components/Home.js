import React, { useState, useEffect }  	from 'react';
import PropTypes            			from 'prop-types';

import { makeStyles }	from '@material-ui/core/styles';
import Card 			from '@material-ui/core/Card';
import CardMedia 		from '@material-ui/core/CardMedia';

import { requestServer } 	from 'requestServer.js';
import ImageEditor 		from 'components/form/ImageEditor';


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

export default function Home(props) {
	const classes = useStyles();
	const [home, setHome] = useState(null);

	useEffect(requestServer('about', 'home', 'image', setHome), []);
	console.log("******************")
	console.log(window.location.origin + '/assets/home.png')

	return (
		<React.Fragment>
			<ImageEditor url={ home } session='about' data='home' type='image' />
		</React.Fragment>
	);
}

Home.defaultProps = {

};

Home.propTypes = {

};
