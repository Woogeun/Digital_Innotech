import React, { useState, useEffect }	from 'react';
import PropTypes            			from 'prop-types';

import { makeStyles }	from '@material-ui/core/styles';
import Carousel 		from 'react-material-ui-carousel'
import Grid 			from '@material-ui/core/Grid';
import Paper 			from '@material-ui/core/Paper';
import Typography 		from '@material-ui/core/Typography';

import networkImg1 		from 'src/../../../assets/network_image/network1.png';
import networkImg2 		from 'src/../../../assets/network_image/network2.png';
import networkImg3 		from 'src/../../../assets/network_image/network3.png';
import networkImg4 		from 'src/../../../assets/network_image/network4.png';
import TextPost 		from 'components/post/TextPost';
import { requestServer } 	from 'requestServer.js';
import TextEditor 		from 'components/form/TextEditor';
import TitleContentEditor 	from 'components/form/TitleContentEditor';


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
				<TextEditor content={title} session='pcSolution/kaiforensics' data='title' type='text' />
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
			<Grid item xs={6} >
				<TitleContentEditor titleContent={imageDetection} session='pcSolution/kaiforensics' data='imagedetection' type='json' />
			</Grid>
			<Grid item xs={6} >
				<TitleContentEditor titleContent={videoDetection} session='pcSolution/kaiforensics' data='videodetection' type='json' />
			</Grid>
		</Grid>
	);
}

KAI_Forensics.defaultProps = {

};

KAI_Forensics.propTypes = {

};
