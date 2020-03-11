import React, { useState, useEffect }  	from 'react';
import PropTypes            			from 'prop-types';

import { makeStyles, useTheme }	from '@material-ui/core/styles';
import Dialog 					from '@material-ui/core/Dialog';
import DialogActions 			from '@material-ui/core/DialogActions';
import DialogContent 			from '@material-ui/core/DialogContent';
import DialogContentText 		from '@material-ui/core/DialogContentText';
import DialogTitle 				from '@material-ui/core/DialogTitle';
import Button 					from '@material-ui/core/Button';
import TextField 				from '@material-ui/core/TextField';
import useMediaQuery 			from '@material-ui/core/useMediaQuery';

import requestServer			from 'requestServer';


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

export default function TextEditor(props) {
	const classes = useStyles();
	const theme = useTheme();
	const { titleContent, session, data, type } = props;
	const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

	const [open, setOpen] = useState(false);
	const [title, setTitle] = useState(titleContent.title);
	const [content, setContent] = useState(titleContent.content);
	useEffect(() => {setTitle(titleContent.title)}, [titleContent]);
	useEffect(() => {setContent(titleContent.content)}, [titleContent]);

	const handleChangeTitle = event => {
		setTitle(event.target.value);
	}

	const handleChangeContent = event => {
		setContent(event.target.value);
	}
	
	const uploadData = () => {
		setOpen(true);
	}

	const handleClose = () => {
		setOpen(false);
		window.location.reload();
	}


	return (
		<React.Fragment>
			<TextField 
			className={ classes.editor }
			multiline
			value={ title }
			label='title'
			onChange={ handleChangeTitle }
			/>
			<TextField 
			className={ classes.editor }
			multiline
			value={ content }
			label='content'
			onChange={ handleChangeContent }
			/>
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
			open={open}
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
		</React.Fragment>
	);
}

TextEditor.defaultProps = {
	

};

TextEditor.propTypes = {
	titleContent: PropTypes.shape({
		title: PropTypes.number,
		content: PropTypes.string
	}),
	session: PropTypes.string,
	data: PropTypes.string,
	type: PropTypes.string,

};
