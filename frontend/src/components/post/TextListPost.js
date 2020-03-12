import React, { useState } 	from 'react';
import PropTypes 			from 'prop-types';

import { makeStyles } 	from '@material-ui/core/styles';
import { Grow } 		from '@material-ui/core';
import Typography 		from '@material-ui/core/Typography';


const growStyles = (order => {
	return ({
		direction: 'up',
		in: true,
		style: { 'transformOrigin': '-1' },
		timeout: 200 * (order + 1)
	});
});

const useStyles = makeStyles(fontSize => ({
	font: {
		ontFamily: 'Raleway',
		color: '#323232'
	}
}));

export default function TextListPost(props) {
	const classes = useStyles();
	const { content, doubleBreak, type } = props;

	return (
		<React.Fragment>
			{ content.map((line, i) => {
				return (
					<Grow {...growStyles(i)}>
						<Typography className={ classes.font } variant={ type }>
							<p>{ line.content }</p>
							{ doubleBreak ? <br/> : null }
						</Typography>
					</Grow>
				);
			})}
		</React.Fragment>
	);
}

TextListPost.defaultProps = {
	type: 'h6',
	doubleBreak: false,
};

TextListPost.propTypes = {
	content: PropTypes.array,
	doubleBreak: PropTypes.bool,
	type: PropTypes.string,
};
