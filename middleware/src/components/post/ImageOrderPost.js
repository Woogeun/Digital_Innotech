import React, { useState } 	from 'react';
import PropTypes 			from 'prop-types';

import { makeStyles } 	from '@material-ui/core/styles';
import { Grow } 		from '@material-ui/core';
import Box      		from '@material-ui/core/Box';
import Paper      		from '@material-ui/core/Paper';


const useStyles = makeStyles(theme => ({
	card: {
		backgroundColor: 'white'
	},
	media: {
		height: 400,
		
	}
}));

const growStyles = (order => {
	return ({
		direction: 'up',
		in: true,
		style: { 'transformOrigin': '-1' },
		timeout: 100 * (order + 1)
	});
});

export default function ImageOrderPost(props) {
	const classes = useStyles();
	const { img, order } = props;
	const z = 3 * (3-order);
	const left = 60 + 60 * order;
	const opacity = (100 - 10 * order).toString() + '%';

	return (
		<Grow {...growStyles(order)}>
			<Box 
			zIndex={z} 
			left={left} 
			position='absolute' 
			className={ classes.card }>
				<Paper style={ {opacity: opacity} }>
					<img src={img} className={ classes.media } />
				</Paper>
			</Box>
		</Grow>
	);
}

ImageOrderPost.defaultProps = {
	type: 'h6'
};

ImageOrderPost.propTypes = {
	img: PropTypes.object,
	order: PropTypes.number,
};
