import React, { useState, useEffect }  from 'react';
import PropTypes          				from 'prop-types';

import { makeStyles }	from '@material-ui/core/styles';
import Grid       		from '@material-ui/core/Grid';
import Paper 			from '@material-ui/core/Paper';
import Typography     	from '@material-ui/core/Typography';

import TextPost 		from 'components/post/TextPost';
import requestServer 	from 'requestServer';


const useStyles = makeStyles(theme => ({
	container: {
		minHeight: 100,
		height: '100%'
	},
	column1: {
		width: '100%',
	},
	profile: {
		padding: theme.spacing(0),
	},
	career: {
		padding: theme.spacing(1),
		height: '100%',
	},
	careerText: {
		fontFamily: 'Raleway',
		color: '#323232'
	},
	greeting: {
		height: '95.5%',
		padding: theme.spacing(2),
	},
	greetingText: {
		fontFamily: 'Raleway',
		color: '#323232'
	},
	details: {
		ontFamily: 'Raleway',
		color: '#323232'
	},
	title: {
		height: 100,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		borderBottom: `1px solid ${theme.palette.divider}`,

	},
}));


export default function CTO(props) {
	const classes = useStyles();
	const [education, setEducation] = useState('Not loaded');
	const [career, setCareer] 		= useState('Not loaded');
	const [message, setMessage] 	= useState('Not loaded');
	const [profile, setProfile] 	= useState(null);
	const [title, setTitle] 		= useState(null);

	useEffect(requestServer('about/cto', 'education', 'text', setEducation), []);
	useEffect(requestServer('about/cto', 'career', 'text', setCareer), []);
	useEffect(requestServer('about/cto', 'message', 'text', setMessage), []);
	useEffect(requestServer('about/cto', 'profile', 'image', setProfile), []);
	useEffect(requestServer('about/cto', 'title', 'text', setTitle), []);

	return (
		<Grid container justify='center' className={ classes.root } spacing={2}>
			<Grid item xs={12} >
				<Paper square elevation={.1} className={ classes.title }>
					<Typography align='center' variant='h6'>
						{ title }
					</Typography>
				</Paper>
			</Grid>
			<Grid 
			container 
			justify='center'
			className={ classes.container } 
			spacing={2} >
				<Grid 
					container
					item
					xs={5}
					direction='column'
					className={ classes.column1 }
					spacing={2}>
					<Grid container item align='center' justify='center' >
						<Grid item>
							<Paper square className={ classes.profile }>
								<img src={profile}  />
							</Paper>
						</Grid>
					</Grid>
					<Grid item >
						<Paper elevation={2}  className={ classes.career } >
							<Typography>
								이흥규
							</Typography>
							<br/>
							<Typography className={ classes.careerText } variant='subtitle2'>
								교육
							</Typography>
							<TextPost content={ education } type='caption'/>
							<br/><br/>
							<Typography className={ classes.careerText } variant='subtitle2'>
								경력
							</Typography>
							<TextPost content={ career } type='caption'/>
						</Paper>
					</Grid>
				</Grid>
				<Grid item xs className={ classes.column2 }>
					<Paper className={ classes.greeting } elevation={2}>
						<TextPost content={ message } doubleBreak={true} type='body1'/>
					</Paper> 
				</Grid>
			</Grid>
		</Grid>
	);
}

CTO.defaultProps = {
	
};

CTO.propTypes = {
	
};
