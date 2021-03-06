import React, { useState, useEffect }	from 'react';
import PropTypes            			from 'prop-types';

import { makeStyles }	from '@material-ui/core/styles';
import Carousel 		from 'react-material-ui-carousel'
import Grid 			from '@material-ui/core/Grid';
import Paper 			from '@material-ui/core/Paper';
import Typography 		from '@material-ui/core/Typography';

import TextPost 		from 'components/post/TextPost';
import requestServer 	from 'requestServer';


const useStyles = makeStyles(theme => ({
	card: {
		margin: theme.spacing(2, 0),
		height: 400,
		display: 'flex',
		justifyContent: "center",
		flexDirection: "column",
	},
	media: {
		opacity: '90%',
		width: '90%',// 16:9
	},
	text: {
		padding: theme.spacing(2),
		height: '90%'
	},
	title: {
		height: 100,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		borderBottom: `1px solid ${theme.palette.divider}`,

	},
}));
							


export default function KAI_Forensics(props) {
	const classes = useStyles();

	const [imageDetection, setImageDetection] 	= useState({title: 'Not defined', content: 'Not defined'});
	const [videoDetection, setVideoDetection] 	= useState({title: 'Not defined', content: 'Not defined'});
	const [title, setTitle] 					= useState(null);

	useEffect(requestServer('pcSolution/kaiforensics', 'imagedetection', 'json', setImageDetection), []);
	useEffect(requestServer('pcSolution/kaiforensics', 'videodetection', 'json', setVideoDetection), []);
	useEffect(requestServer('pcSolution/kaiforensics', 'title', 'text', setTitle), []);

	function importAll(r) {
		return r.keys().map(r);
	}
	const imgs = importAll(require.context('src/../../../assets/network_image/', false, /\.(png|jpe?g|svg)$/));

	return (
		<Grid container justify='center' spacing={2} >
			<Grid item xs={12} >
				<Paper square elevation={.1} className={ classes.title }>
					<Typography align='center' variant='h6'>
						{ title }
					</Typography>
				</Paper>
			</Grid>
			<Grid item xs={12}>
				<Carousel interval={5000} >
					{ imgs.map(img => {
						return (
							<Paper className={ classes.card }>
								<img src={img} className={ classes.media } />
							</Paper>
						);
					})}
				</Carousel>
			</Grid>
			<Grid item xs >
				<Paper square className={ classes.text }>
					<Typography variant='body1'>
						{ imageDetection.title }
					</Typography>
					<br/>
					<TextPost content={ imageDetection.content } type='body2'/>
				</Paper>
			</Grid>
			<Grid item xs >
				<Paper square className={ classes.text }>
					<Typography variant='body1'>
						{ videoDetection.title }
					</Typography>
					<br/>
					<TextPost content={ videoDetection.content } type='body2'/>
				</Paper>
			</Grid>
		</Grid>
	);
}

KAI_Forensics.defaultProps = {

};

KAI_Forensics.propTypes = {

};
