import React, { useState, useEffect } 	from 'react';
import PropTypes 						from 'prop-types';

import { makeStyles } 	from '@material-ui/core/styles';
import Grid 			from '@material-ui/core/Grid';

import TextPost 		from 'components/post/TextPost';
import requestServer 	from 'requestServer';


const useStyles = makeStyles(theme => ({
	root: {

	},
	footer: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(3, 0),
	},
	container: {
		padding: 10,
	}
}));

export default function Footer(props) {
	const classes = useStyles();
	const [footer, setFooter] = useState("Not loaded");

	useEffect(requestServer('footer', 'contact', 'text', setFooter), []);

	return (
		<Grid container justify='center' className={ classes.root } spacing={2}>
			<Grid item xs={8} className={ classes.container }>
				<footer className={ classes.footer } align='center'>
					<TextPost content={ footer } type='body2'/>
				</footer>
			</Grid>
		</Grid>
	);
}
