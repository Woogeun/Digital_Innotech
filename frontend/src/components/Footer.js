import React, { useState, useEffect } 	from 'react';
import PropTypes 						from 'prop-types';

import { makeStyles } 	from '@material-ui/core/styles';

import TextPost 		from  'components/post/TextPost';
import requestServer 	from 'requestServer';


const useStyles = makeStyles(theme => ({
	footer: {
		backgroundColor: theme.palette.background.paper,
		// marginTop: theme.spacing(8),
		padding: theme.spacing(3, 0),
	},
}));

export default function Footer(props) {
	const classes = useStyles();
	const [footer, setFooter] = useState("Not loaded");

	useEffect(requestServer('footer', 'contact', 'text', setFooter), []);

	return (
		<footer className={ classes.footer } align='center'>
			<TextPost content={ footer } type='body2'/>
		</footer>
	);
}
