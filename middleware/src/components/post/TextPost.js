import React, { useState } 	from 'react';
import PropTypes 			from 'prop-types';

import { makeStyles } 	from '@material-ui/core/styles';
import Typography 		from '@material-ui/core/Typography';


const useStyles = makeStyles(fontSize => ({
	font: {
		ontFamily: 'Raleway',
		color: '#323232'
	}
}));

export default function TextPost(props) {
	const classes = useStyles();
	const { content, doubleBreak, type } = props;

	return (
		<React.Fragment>
			{ content.split('\n').map((line, i) => {
				return (
					<Typography className={ classes.font } variant={ type }>
						{ line }
						{ doubleBreak ? <br/> : null }
					</Typography>
				);
			})}
		</React.Fragment>
	);
}

TextPost.defaultProps = {
	doubleBreak: false,
};

TextPost.propTypes = {
	content: PropTypes.string,
	doubleBreak: PropTypes.bool,
	type: PropTypes.string,
};
