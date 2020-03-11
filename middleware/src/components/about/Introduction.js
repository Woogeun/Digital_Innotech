import React, { useState, useEffect }	from 'react';
import PropTypes            			from 'prop-types';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Box      				from '@material-ui/core/Box';
import Button      				from '@material-ui/core/Button';
import Grid      				from '@material-ui/core/Grid';
import GetAppIcon       		from '@material-ui/icons/GetApp';
import Paper		       		from '@material-ui/core/Paper';
import Typography       		from '@material-ui/core/Typography';

import pdf 				from 'assets/KAI_Forensics.pdf'
import img1 			from 'assets/KAI_Forensics_1.jpg';
import img2 			from 'assets/KAI_Forensics_2.jpg';
import img3 			from 'assets/KAI_Forensics_3.jpg';
import img4 			from 'assets/KAI_Forensics_4.jpg';
import img5 			from 'assets/KAI_Forensics_5.jpg';
import img6 			from 'assets/KAI_Forensics_6.jpg';
import img7 			from 'assets/KAI_Forensics_7.jpg';
import img8 			from 'assets/KAI_Forensics_8.jpg';
import img9 			from 'assets/KAI_Forensics_9.jpg';
import img10 			from 'assets/KAI_Forensics_10.jpg';
import img11 			from 'assets/KAI_Forensics_11.jpg';
import ImageOrderPost 	from 'components/post/ImageOrderPost';
import { requestServer } 	from 'requestServer.js';
import TextEditor 		from 'components/form/TextEditor';


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
	const imgs = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];
	// const [pdf, setPdf] 			= useState(null);
	// const [pdfImage, setPdfImage] 	= useState(null);
	const [title, setTitle] 		= useState(null);

	// useEffect(requestServer('about/introduction', 'pdf', 'pdf', setPdf), []);
	// useEffect(requestServer('about/introduction', 'pdfimage', 'image', setPdfImage), []);
	useEffect(requestServer('about/introduction', 'title', 'text', setTitle), []);

	return (
		<Grid container justify='center' className={ classes.root } spacing={2}>
			<Grid item xs={12} >
				<TextEditor content={title} session='about/introduction' data='title' type='text' />
			</Grid>
			<Box position='relative' className={ classes.container } >
				{ imgs.map((img, i) => {
					return (
						<ImageOrderPost img={img} order={i} />
					);
				})}
			</Box>
			<Box className={classes.icon}>
				<Typography className={classes.text}>
					회사 소개 자료 다운로드
				</Typography>
				<Button>
					<a href={pdf} >
						<GetAppIcon color='primary' fontSize='large' />
					</a>
				</Button>
			</Box>
		</Grid>
	);
}

Introduction.defaultProps = {

};

Introduction.propTypes = {
	
};