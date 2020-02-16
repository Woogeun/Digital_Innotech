import React 			from 'react';
import PropTypes 		from 'prop-types';

import { makeStyles } 	from '@material-ui/core/styles';

import footer 	from 'data/footer.js';
import TextPost from  'components/post/TextPost';


const useStyles = makeStyles(theme => ({
	footer: {
		backgroundColor: theme.palette.background.paper,
		// marginTop: theme.spacing(8),
		padding: theme.spacing(3, 0),
	},
}));

export default function Footer(props) {
	const classes = useStyles();

	return (
		<footer className={classes.footer} align='center'>
			<TextPost content={ footer } type='body2'/>
		</footer>
	);
}
