import React, { useState, useEffect } 	from 'react';
import PropTypes 						from 'prop-types';

import { makeStyles } 	from '@material-ui/core/styles';
import Button      		from '@material-ui/core/Button';
import Typography 		from '@material-ui/core/Typography';

import PdfEditor 		from 'components/form/PdfEditor';
import TextPost 		from 'components/post/TextPost';
import TextEditor 		from 'components/form/TextEditor';
import { requestServer } 	from 'requestServer.js';


const useStyles = makeStyles(theme => ({
	footer: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(3, 0),
	},
}));

export default function Footer(props) {
	const classes = useStyles();
	const [footer, setFooter] = useState("Not loaded");
	const [pdfURL, setPdfURL] 		= useState(null);
	useEffect(requestServer('footer', 'contact', 'text', setFooter), []);
	useEffect(requestServer('footer', 'pdf', 'pdf', setPdfURL), []);

	return (
		<React.Fragment>
			<footer className={ classes.footer } align='center'>
				<TextEditor content={ footer } session='footer' data='contact' type='text'/>
			</footer>
			<Button>
				<a href={ pdfURL } download>
					<Typography align='right' variant='body2'>
						사용약관
					</Typography>
				</a>
			</Button>
			<PdfEditor url={ '' } session={'footer'} data={'pdf'} type={'pdf'}/>
		</React.Fragment>
	);
}
