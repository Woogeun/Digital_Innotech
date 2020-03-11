import React, { useState, useEffect }  	from 'react';
import PropTypes            			from 'prop-types';

import { makeStyles, useTheme }	from '@material-ui/core/styles';
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

import { requestServer } 	from 'requestServer.js';


const useStyles = makeStyles(theme => ({
	root: {
		// width: '100%',
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
	const { history, session, data, type } = props;
	const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

	const [openUpdate, setUpdate] = useState(false);
	const [openDelete, setDelete] = useState(false);
	const [open, setOpen] = useState(false);
	const [year, setYear] = useState(history.year);
	const [content, setContent] = useState(history.content);
	useEffect(() => {setYear(history.year)}, [history]);
	useEffect(() => {setContent(history.content)}, [history]);

	const handleChangeYear = event => {
		setYear(event.target.value);
	}

	const handleChangeContent = event => {
		setContent(event.target.value);
	}
	
	const uploadData = () => {
		setUpdate(true);
	}

	const deleteData = () => {
		setDelete(true);
	}

	const handleClose = () => {
		setUpdate(false);
		setDelete(false);
		window.location.reload();
	}


	return (
		<React.Fragment>
			<Grid container>
				<Grid item xs={2}>
					<TextField 
					className={ classes.editor }
					multiline
					label='year'
					value={ year }
					onChange={ handleChangeYear }
					/>
				</Grid>
				<Grid item xs={11}>
					<TextField 
					className={ classes.editor }
					multiline
					label='contents'
					value={ content }
					onChange={ handleChangeContent }
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
			onClick={uploadData}>
				Edit
			</Button>
			
			<Dialog
			className={ classes.dialog }
			fullScreen={fullScreen}
			open={openUpdate}
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
		</React.Fragment>
	);
}

HistoryEditor.defaultProps = {

};

HistoryEditor.propTypes = {
	history: PropTypes.shape({
		year: PropTypes.number,
		content: PropTypes.string
	}),
	session: PropTypes.string,
	data: PropTypes.string,
	type: PropTypes.string,

};
