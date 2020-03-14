import React, { useState, useEffect }  	from 'react';
import PropTypes            			from 'prop-types';

import { makeStyles, useTheme }	from '@material-ui/core/styles';
import Box 						from '@material-ui/core/Box';
import Button 					from '@material-ui/core/Button';
import Card 					from '@material-ui/core/Card';
import CardMedia 				from '@material-ui/core/CardMedia';
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
		backgroundColor: '#FAFAFA',
		margin: theme.spacing(2, 0),
		display: 'flex',
		minHeight: 300,
		width: '100%',
		float: 'right'
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
	const { url, session, data, type } = props;
	const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

	const [result, setResult] = useState('None');	
	const [open, setOpen] = useState(false);
	const [file, setFile] = useState(null);
	const [src, setSrc] = useState(url);
	useEffect(() => {setSrc(url)}, [url]);

	const handleChange = event => {
		setFile(event.target.files[0]);
		setSrc(URL.createObjectURL(event.target.files[0]));
	}
	
	const uploadData = () => {
		if (file === null) {
			setResult('No data selected!');
			setOpen(true);
		} else {
			uploadServer(session, data, type, file);
			if (true) {
				setResult('"' + data + '"' + ' uploaded sucessfully!');		
			} else {
				setResult('"' + data + '"' + ' upload fail!');	
			}
			setOpen(true);
		}
		
		
	}

	const handleClose = () => {
		setOpen(false);
		window.location.reload();
	}


	return (
		<Box className={ classes.root }>
			<Card 
			elevation={0}
			className={classes.editor}>
				<CardMedia
					component="img"
					image={src}/>
			</Card>
			<input 
			type='file' 
			accept='image/png, image/jpg, image/jpeg'
			required
			onChange={handleChange} />
			<Button 
			className={ classes.button }
			variant='contained' 
			color='primary'
			size='small'
			onClick={uploadData}>
				Upload
			</Button>
			<Dialog
			className={ classes.dialog }
			fullScreen={fullScreen}
			open={open}
			onClose={handleClose}>
				<DialogTitle>
					{result}!
				</DialogTitle>
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
	url: PropTypes.string,
	session: PropTypes.string,
	data: PropTypes.string,
	type: PropTypes.string,

};
