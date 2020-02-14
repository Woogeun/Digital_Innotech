import React, { useState } 	from 'react';
import PropTypes 			from 'prop-types';

import { makeStyles } 	from '@material-ui/core/styles';
import Box      		from '@material-ui/core/Box';
import Paper      		from '@material-ui/core/Paper';
import Typography 		from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
	card: {
		
	},
	media: {
		height: 400,
		
	},
}));

export default function ImageOrderPost(props) {
	const classes = useStyles();
	const { img, order } = props;
	const z = 3 * (3-order);
	const left = 60 + 60 * order;
	const opacity = (100 - 10 * order).toString() + '%';

	return (
		<Box 
		zIndex={z} 
		left={left} 
		position='absolute' 
		style={ {opacity: opacity} }
		className={ classes.card }>
			<Paper>
				<img src={img} className={ classes.media } />
			</Paper>
		</Box>
	);
}

ImageOrderPost.defaultProps = {
	type: 'h6'
};

ImageOrderPost.propTypes = {
	img: PropTypes.object,
	order: PropTypes.number,
};
