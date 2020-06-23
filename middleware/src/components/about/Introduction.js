import React, { useState, useEffect }	from 'react';
import PropTypes            			from 'prop-types';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Box      				from '@material-ui/core/Box';
import Button      				from '@material-ui/core/Button';
import Grid      				from '@material-ui/core/Grid';
import GetAppIcon       		from '@material-ui/icons/GetApp';
import Paper		       		from '@material-ui/core/Paper';
import Typography       		from '@material-ui/core/Typography';

import ImageOrderPost 	from 'components/post/ImageOrderPost';
import { requestServer } 	from 'requestServer.js';
import TextEditor 		from 'components/form/TextEditor';
import PdfEditor 		from 'components/form/PdfEditor';


const useStyles = makeStyles(theme => ({
	container: {
		padding: theme.spacing(4),
		width: '100%',
		minHeight: 400,
		textAlign: 'center'
	},
	card: {
		opacity: '90%',
	},
	media: {
		height: 400,
		
	},
	icon: {
		padding: theme.spacing(4),
		textAlign: 'center'
	},
	text: {
		fontFamily: 'Raleway',
		fontSize: 15,
		color: '#0000AA',
		padding: theme.spacing(1)
	},
	title: {
		height: 100,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		borderBottom: `1px solid ${theme.palette.divider}`,

	},
}));

export default function Introduction(props) {
	const classes = useStyles();
	const [title, setTitle] 		= useState(null);
	const [pdfURL, setPdfURL] 		= useState(null);
	useEffect(requestServer('about/introduction', 'title', 'text', setTitle), []);
	useEffect(requestServer('about/introduction', 'pdf', 'pdf', setPdfURL), []);

	function importAll(r) {
		return r.keys().map(r);
	}
	// const imgs = importAll(require.context('src/../../../assets/KAI_Forensics_image/', false, /\.(png|jpe?g|svg)$/));
	// const pdf = importAll(require.context('src/../../../assets/KAI_Forensics_file/', false, /./))[0];

	return (
		<Grid container justify='center' className={ classes.root } spacing={2}>
			<Grid item xs={12} >
				<TextEditor content={title} session='about/introduction' data='title' type='text' />
			</Grid>
			
			<Box className={classes.icon}>
				<Typography className={classes.text}>
					회사 소개 자료 다운로드
				</Typography>
				<Button>
					<a href={ pdfURL } download>
						<GetAppIcon color='primary' fontSize='large' />
					</a>
				</Button>
				<PdfEditor url={ '' } session={'about/introduction'} data={'pdf'} type={'pdf'}/>
			</Box>
		</Grid>
	);
}

Introduction.defaultProps = {

};

Introduction.propTypes = {
	
};


			// <Box position='relative' className={ classes.container } >
			// 	{ imgs.map((img, i) => {
			// 		return (
			// 			<ImageOrderPost img={img} order={i} />
			// 		);
			// 	})}
			// </Box>