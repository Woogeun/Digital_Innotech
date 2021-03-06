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

export default function HistoryEditor(props) {
	const classes = useStyles();
	const theme = useTheme();
	const { session, data, type } = props;
	const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

	const [openUpload, setUpload] = useState(false);
	const [open, setOpen] = useState(false);
	const [year, setYear] = useState('');
	const [content, setContent] = useState('');

	const handleChangeYear = event => {
		setYear(event.target.value);
	}

	const handleChangeContent = event => {
		setContent(event.target.value);
	}
	
	const uploadData = () => {
		uploadServer(session, data, type, {year: year, content: content})
		setUpload(true);
	}

	const handleClose = () => {
		setUpload(false);
		window.location.reload();
	}


	return (
		<Box className={ classes.root }>
			<Grid container>
				<Grid item xs={4}>
					<TextField 
					className={ classes.editor }
					multiline
					label='year'
					value={ year }
					placeholder='Year'
					onChange={ handleChangeYear }
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField 
					className={ classes.editor }
					multiline
					label='contents'
					value={ content }
					placeholder='Contents'
					onChange={ handleChangeContent }
					/>
				</Grid>
			</Grid>
			<Button 
			className={ classes.button }
			variant='contained' 
			color='primary'
			size='small'
			onClick={uploadData}>
				Add
			</Button>
			
			<Dialog
			className={ classes.dialog }
			fullScreen={fullScreen}
			open={openUpload}
			onClose={handleClose}>
				<DialogTitle>
					Uploaded successfully!
				</DialogTitle>
				<DialogContent>
					<DialogContentText>
						"{data}" uploaded successfully!
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

HistoryEditor.defaultProps = {

};

HistoryEditor.propTypes = {
	session: PropTypes.string,
	data: PropTypes.string,
	type: PropTypes.string,

};
