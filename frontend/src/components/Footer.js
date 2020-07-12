import React, { useState, useEffect } 	from 'react';
import PropTypes 						from 'prop-types';

import { makeStyles } 	from '@material-ui/core/styles';
import Button      		from '@material-ui/core/Button';
import Grid 			from '@material-ui/core/Grid';
import Typography 		from '@material-ui/core/Typography';

import TextPost 		from 'components/post/TextPost';
import requestServer 	from 'requestServer';


const useStyles = makeStyles(theme => ({
	root: {

	},
	footer: {
		backgroundColor: theme.palette.background.paper,
		// padding: theme.spacing(3, 0),
	},
	container: {
		padding: 10,
	},
	button: {
		// paddingLeft: -20,
		marginLeft: -10
	}
}));

export default function Footer(props) {
	const classes = useStyles();
	const [footer, setFooter] = useState("Not loaded");
	const [pdfURL, setPdfURL] 		= useState(null);
	useEffect(requestServer('footer', 'contact', 'text', setFooter), []);
	useEffect(requestServer('footer', 'pdf', 'pdf', setPdfURL), []);

	

	return (
		<Grid container justify='center' className={ classes.root } spacing={2}>
			<Grid item xs={8} className={ classes.container }>
				<footer className={ classes.footer } align='left'>
					<TextPost content={ footer } type='body2'/>
				</footer>
				
				<a href={ pdfURL } download className={ classes.button }>
				<Button  >
					<Typography align='left' variant='caption' >
						사용약관
					</Typography>
				</Button>
				</a>
				
			</Grid>
		</Grid>
	);
}
