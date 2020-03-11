import React, { useState, useEffect }  	from 'react';
import PropTypes            			from 'prop-types';

import { makeStyles }	from '@material-ui/core/styles';
import Grid 			from '@material-ui/core/Grid';
import Paper 			from '@material-ui/core/Paper';
import Typography 		from '@material-ui/core/Typography';

import requestServer	from 'requestServer';
import TextEditor 		from 'components/form/TextEditor';


const useStyles = makeStyles(theme => ({
	map: {
		width: 400,
		height: 300,
		border: 0,
	},
	text: {
		fontSize: 14,
		color: '#777777'
	},
	title: {
		height: 100,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		borderBottom: `1px solid ${theme.palette.divider}`,

	},
}));

export default function Contact(props) {
	const classes = useStyles();
	const [contact, setContact] = useState(null);
	const [title, setTitle] 	= useState(null);

	useEffect(requestServer('contact', 'contact', 'text', setContact), []);
	useEffect(requestServer('contact', 'title', 'text', setTitle), []);

	return (
		<Grid container justify='center' className={ classes.root } spacing={2}>
			<Grid item xs={12} >
				<TextEditor content={title} session='contact' data='title' type='text' />
			</Grid>
			<Grid container spacing={1}>
				<Grid item xs >
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3212.681331645741!2d127.36308211523932!3d36.368496999580564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35654bc8e7a048cf%3A0xf426af5f18e267a1!2z64yA7KCE6rSR7Jet7IucIOyYqOyynDLrj5kg7ZWc6rWt6rO87ZWZ6riw7Iig7JuQIOygleuztOyghOyekOqzte2VmeuPmQ!5e0!3m2!1sko!2skr!4v1582785339270!5m2!1sko!2skr"
					className={ classes.map } />
				</Grid>
				<Grid 
				item container 
				xs 
				direction='column'
				justify='center'>
					<Grid item  >
						<TextEditor content={contact} session='contact' data='contact' type='text' />
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}

Contact.defaultProps = {

};

Contact.propTypes = {

};
