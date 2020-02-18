import React, { useState, useEffect }  from 'react';
import PropTypes            			from 'prop-types';

import { makeStyles, useTheme }	from '@material-ui/core/styles';
import { deepPurple }			from '@material-ui/core/colors';
import { Grow } 				from '@material-ui/core';
import Card           	from '@material-ui/core/Card';
import CardMedia       	from '@material-ui/core/CardMedia';
import Divider      	from '@material-ui/core/Divider';
import Grid           	from '@material-ui/core/Grid';
import Paper           	from '@material-ui/core/Paper';
import Typography       from '@material-ui/core/Typography';

import TextPost 		from 'components/post/TextPost';
import requestServer 	from 'requestServer';


const useStyles = makeStyles(theme => ({
	media: {
		width: '100%',
		opacity: '80%'
	},
	info: {
		minHeight: 400,
		paddingTop: theme.spacing(1),
		// backgroundColor: 'gray'
	},
	content: {
		padding: theme.spacing(1),
		// backgroundColor: 'gray'
	},
	title: {
		fontFamily: 'Raleway',
		fontSize: 22,
		color: '#323232',
		textAlign: 'center'
	},
	detail: {
		fontFamily: 'Raleway',
		fontSize: 17,
		color: '#323232'
	}
}));

export default function Technique(props) {
	const classes = useStyles();
	const theme = useTheme();
	const [why, setWhy] 	= useState('Not loaded');
	const [how, setHow] 	= useState('Not loaded');
	const [now, setNow] 	= useState('Not loaded');
	const [image, setImage] = useState(null);

	useEffect(requestServer('forensics/technique', 'why', 'text', setWhy), []);
	useEffect(requestServer('forensics/technique', 'how', 'text', setHow), []);
	useEffect(requestServer('forensics/technique', 'now', 'text', setNow), []);
	useEffect(requestServer('forensics/technique', 'image', 'image', setImage), []);
	
	return (
		<React.Fragment>
			<Card>
				<CardMedia
				component="img"
				className={classes.media}
				image={image}/>
			</Card>
			<Grid
			container
			spacing={2}
			className={ classes.info }>
				<Grid item xs={6} >
					<Paper elevation={1} className={ classes.content }>
						<Typography className={ classes.title }>
							WHY
						</Typography>
						<Typography className={ classes.detail }>
							<TextPost content={ why } type='body1'/>
						</Typography>
					</Paper>
				</Grid>
				<Grid item xs={6} >
					<Paper elevation={1} className={ classes.content }>
						<Typography className={ classes.title }>
							HOW
						</Typography>
						<Typography className={ classes.detail }>
							<TextPost content={ how } type='body1'/>
						</Typography>
					</Paper>
				</Grid>
				<Grid item xs={12} >
					<Paper elevation={1} className={ classes.content }>
						<Typography className={ classes.title } >
							NOW
						</Typography>
						<Typography className={ classes.detail }>
							<TextPost content={ now } type='body1'/>
						</Typography>
					</Paper>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}

Technique.defaultProps = {

};

Technique.propTypes = {

};
