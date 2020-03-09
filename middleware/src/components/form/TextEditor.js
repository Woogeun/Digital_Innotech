import React, { useState, useEffect }  	from 'react';
import PropTypes            			from 'prop-types';

import { makeStyles }	from '@material-ui/core/styles';
import TextField 		from '@material-ui/core/TextField';

import requestServer	from 'requestServer';


const useStyles = makeStyles(theme => ({
	root: {
		// width: '100%',
	},	
	editor: {
		width: '100%',
	},
}));

export default function TextEditor(props) {
	const classes = useStyles();
	const { content } = props;
	const [value, setValue] = useState(null);

	const handleChange = event => {
		setValue(event.target.value);
	}



	// useEffect(requestServer('about', 'home', 'image', setHome), []);

	return (
		<form className={ classes.root }>
			<TextField 
			className={ classes.editor }
			label='Editor'
			multiline
			defaultValue={content}
			value={value}
			onChange={handleChange}
			/>
		</form>
	);
}

TextEditor.defaultProps = {
	content: 'Default value',

};

TextEditor.propTypes = {
	content: PropTypes.string,

};
