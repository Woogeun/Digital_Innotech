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

export default function YearDetailPost(props) {
	const classes = useStyles();
	const { yearDetail, type } = props;

	return (
		<Typography className={ classes.details } variant={ type }>
			{ yearDetail.map( content => {
					return (<span>{ content.year } : { content.description }<br/></span>);
			})}
		</Typography>
	);
}

YearDetailPost.defaultProps = {
	type: 'h6'
};

YearDetailPost.propTypes = {
	yearDetail: PropTypes.shape({
		year: PropTypes.string,
		description: PropTypes.array
	}),
	type: PropTypes.string,
};
