import React, { useState, useEffect }  	from 'react';
import PropTypes            			from 'prop-types';

import { makeStyles, useTheme }	from '@material-ui/core/styles';
import Box 						from '@material-ui/core/Box';
import Button 					from '@material-ui/core/Button';
import DeleteIcon 				from '@material-ui/icons/Delete';
import Dialog 					from '@material-ui/core/Dialog';
import DialogActions 			from '@material-ui/core/DialogActions';
import DialogContent 			from '@material-ui/core/DialogContent';
import DialogContentText 		from '@material-ui/core/DialogContentText';
import DialogTitle 				from '@material-ui/core/DialogTitle';
import Grid 					from '@material-ui/core/Grid';
import IconButton 				from '@material-ui/core/IconButton';
import TextField 				from '@material-ui/core/TextField';
import useMediaQuery 			from '@material-ui/core/useMediaQuery';

import { updateServer, deleteServer } 	from 'requestServer.js';


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
	const [openDelete, setDelete] = useState(false);
	const [value, setValue] = useState(content.content);
	useEffect(() => {setValue(content.content)}, [content]);

	const handleChange = event => {
		setValue(event.target.value);
	}
	
	const updateData = () => {
		updateServer(session, data, type, {id: content.id, content: value});
		setOpen(true);
	}

	const deleteData = () => {
		deleteServer(session, data, type, content.id);
		setDelete(true);
	}

	const handleClose = () => {
		setOpen(false);
		setDelete(false);
		window.location.reload();
	}


	return (
		<Box className={ classes.root }>
			<Grid container>
				<Grid item xs={11}>
					<TextField 
					className={ classes.editor }
					multiline
					value={ value }
					onChange={ handleChange }
					/>
				</Grid>
				<Grid item xs={1}>
					<IconButton 
					color='primary'
					onClick={deleteData}>
						<DeleteIcon />
					</IconButton>
				</Grid>
			</Grid>
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
			<Dialog
			className={ classes.dialog }
			fullScreen={fullScreen}
			open={openDelete}
			onClose={handleClose}>
				<DialogTitle>
					Deleted successfully!
				</DialogTitle>
				<DialogContent>
					<DialogContentText>
						"{data}" deleted successfully!
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

};

TextEditor.propTypes = {
	content: PropTypes.shape({
		id: PropTypes.number,
		content: PropTypes.string
	}),
	session: PropTypes.string,
	data: PropTypes.string,
	type: PropTypes.string,

};
