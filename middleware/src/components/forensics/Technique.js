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
import TextEditor 		from 'components/form/TextEditor';
import TitleContentEditor 	from 'components/form/TitleContentEditor';


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
				<TextEditor content={title} session='forensics/technique' data='title' type='text' />
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
					<TitleContentEditor titleContent={why} session='forensics/technique' data='why' type='json'/>
				</Grid>
				<Grid item xs={6} >
					<TitleContentEditor titleContent={how} session='forensics/technique' data='how' type='json'/>
				</Grid>
				<Grid item xs={12} >
					<TitleContentEditor titleContent={now} session='forensics/technique' data='now' type='json'/>
				</Grid>
			</Grid>
		</Grid>
	);
}

Technique.defaultProps = {

};

Technique.propTypes = {

};
