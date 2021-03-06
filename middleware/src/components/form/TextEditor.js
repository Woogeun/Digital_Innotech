import React, { useState, useEffect }  	from 'react';
import PropTypes            			from 'prop-types';

import { makeStyles, useTheme }	from '@material-ui/core/styles';
import Box 						from '@material-ui/core/Box';
import Button 					from '@material-ui/core/Button';
import Dialog 					from '@material-ui/core/Dialog';
import DialogActions 			from '@material-ui/core/DialogActions';
import DialogContent 			from '@material-ui/core/DialogContent';
import DialogContentText 		from '@material-ui/core/DialogContentText';
import DialogTitle 				from '@material-ui/core/DialogTitle';
import TextField 				from '@material-ui/core/TextField';
import useMediaQuery 			from '@material-ui/core/useMediaQuery';

import { uploadServer } 	from 'requestServer.js';


const useStyles = makeStyles(theme => ({
	root: {
		// width: '100%',
		border: 'solid',
		borderColor: 'gray',
		borderWidth: '1px',
		borderRadius: '3px',
		margin: theme.spacing(1),
		marginBottom: theme.spacing(8),
		padding: theme.spacing(1)
	},	
	editor: {
		width: '100%',
		marginBottom: theme.spacing(1),
	},
	button: {
		float: 'right'
	},
	dialog: {
		
	}
}));

export default function TextEditor(props) {
	const classes = useStyles();
	const theme = useTheme();
	const { content, session, data, type } = props;
	const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

	const [open, setOpen] = useState(false);
	const [value, setValue] = useState(content);
	useEffect(() => {setValue(content)}, [content]);

	const handleChange = event => {
		setValue(event.target.value);
	}
	
	const updateData = () => {
		setOpen(true);
		uploadServer(session, data, type, value);
	}

	const handleClose = () => {
		setOpen(false);
		window.location.reload();
	}


	return (
		<Box className={ classes.root }>
			<TextField 
			className={ classes.editor }
			multiline
			value={ value }
			onChange={ handleChange }
			/>
			<Button 
			className={ classes.button }
			variant='contained' 
			color='primary'
			size='small'
			onClick={updateData}>
				Edit
			</Button>
			<Dialog
			className={ classes.dialog }
			fullScreen={fullScreen}
			open={open}
			onClose={handleClose}>
				<DialogTitle>
					Updated successfully!
				</DialogTitle>
				<DialogContent>
					<DialogContentText>
						"{data}" updated successfully!
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color='primary'>
						Exit
					</Button>
				</DialogActions>
			</Dialog>
		</Box>
	);
}

TextEditor.defaultProps = {
	content: 'Default value',

};

TextEditor.propTypes = {
	content: PropTypes.string,
	session: PropTypes.string,
	data: PropTypes.string,
	type: PropTypes.string,

};
