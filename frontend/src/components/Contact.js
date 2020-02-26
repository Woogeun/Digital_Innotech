import React, { useState, useEffect }  	from 'react';
import PropTypes            			from 'prop-types';

import { makeStyles }	from '@material-ui/core/styles';
import Grid 			from '@material-ui/core/Grid';
import Typography 		from '@material-ui/core/Typography';

import requestServer	from 'requestServer';


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
}));

export default function Contact(props) {
	const classes = useStyles();
	const [contact, setContact] = useState(null);

	useEffect(requestServer('contact', 'contact', 'text', setContact), []);

	return (
		<React.Fragment>
			<Grid container spacing={1}>
				<Grid item xs >
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3212.6044893433063!2d127.36044341523923!3d36.37035789947678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35654bc9c833c2c1%3A0x92ff64c311d0cb1f!2z64yA7KCE6rSR7Jet7IucIOyYqOyynDLrj5kg7ZWc6rWt6rO87ZWZ6riw7Iig7JuQIOywveydmO2VmeyKteq0gA!5e0!3m2!1sko!2skr!4v1582698971346!5m2!1sko!2skr"
					className={ classes.map } />
				</Grid>
				<Grid 
				item container 
				xs 
				direction='column'
				justify='center'>
					<Grid item  >
						<Typography className={ classes.text } >
							{contact}
						</Typography>
					</Grid>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}

Contact.defaultProps = {

};

Contact.propTypes = {

};
