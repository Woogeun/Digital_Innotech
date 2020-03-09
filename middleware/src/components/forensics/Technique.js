import React, { useState, useEffect }  from 'react';
import PropTypes            			from 'prop-types';

import { makeStyles, useTheme }	from '@material-ui/core/styles';
import Card           	from '@material-ui/core/Card';
import CardMedia       	from '@material-ui/core/CardMedia';
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
	},
	content: {
		padding: theme.spacing(1),
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
	},
	_title: {
		height: 100,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		borderBottom: `1px solid ${theme.palette.divider}`,

	},

}));

export default function Technique(props) {
	const classes = useStyles();
	const [why, setWhy] 	= useState({title: 'Not loaded', content: 'Not loaded'});
	const [how, setHow] 	= useState({title: 'Not loaded', content: 'Not loaded'});
	const [now, setNow] 	= useState({title: 'Not loaded', content: 'Not loaded'});
	const [image, setImage] = useState(null);
	const [title, setTitle] = useState(null);

	useEffect(requestServer('forensics/technique', 'why', 'json', setWhy), []);
	useEffect(requestServer('forensics/technique', 'how', 'json', setHow), []);
	useEffect(requestServer('forensics/technique', 'now', 'json', setNow), []);
	useEffect(requestServer('forensics/technique', 'image', 'image', setImage), []);
	useEffect(requestServer('forensics/technique', 'title', 'text', setTitle), []);
	
	return (
		<Grid container justify='center' className={ classes.root } spacing={2}>
			<Grid item xs={12} >
				<Paper square elevation={.1} className={ classes._title }>
					<Typography align='center' variant='h6'>
						{ title }
					</Typography>
				</Paper>
			</Grid>
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
							{ why.title }
						</Typography>
						<Typography className={ classes.detail }>
							<TextPost content={ why.content } type='body1'/>
						</Typography>
					</Paper>
				</Grid>
				<Grid item xs={6} >
					<Paper elevation={1} className={ classes.content }>
						<Typography className={ classes.title }>
							{ how.title }
						</Typography>
						<Typography className={ classes.detail }>
							<TextPost content={ how.content } type='body1'/>
						</Typography>
					</Paper>
				</Grid>
				<Grid item xs={12} >
					<Paper elevation={1} className={ classes.content }>
						<Typography className={ classes.title } >
							{ now.title } 
						</Typography>
						<Typography className={ classes.detail }>
							<TextPost content={ now.content } type='body1'/>
						</Typography>
					</Paper>
				</Grid>
			</Grid>
		</Grid>
	);
}

Technique.defaultProps = {

};

Technique.propTypes = {

};
