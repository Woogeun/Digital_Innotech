import React, { useState, useEffect }	from 'react';
import PropTypes            			from 'prop-types';

import { makeStyles }	from '@material-ui/core/styles';
import Carousel 		from 'react-material-ui-carousel'
import Grid 			from '@material-ui/core/Grid';
import Paper 			from '@material-ui/core/Paper';
import Typography 		from '@material-ui/core/Typography';

import networkImg1 		from 'assets/network1.png';
import networkImg2 		from 'assets/network2.png';
import networkImg3 		from 'assets/network3.png';
import networkImg4 		from 'assets/network4.png';
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
	}
}));
							


export default function KAI_Forensics(props) {
	const classes = useStyles();
	const imgs = [networkImg1, networkImg2, networkImg3, networkImg4];

	const [imageDetection, setImageDetection] 	= useState({title: 'Not defined', content: 'Not defined'});
	const [videoDetection, setVideoDetection] 	= useState({title: 'Not defined', content: 'Not defined'});

	useEffect(requestServer('solution/kaiforensics', 'imagedetection', 'json', setImageDetection), []);
	useEffect(requestServer('solution/kaiforensics', 'videodetection', 'json', setVideoDetection), []);

	return (
		<Grid container justify='center' spacing={2} >
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
