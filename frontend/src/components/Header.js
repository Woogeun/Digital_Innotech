import React, { useState, useEffect } 	from 'react';
import PropTypes 						from 'prop-types';

import { makeStyles } 	from '@material-ui/core/styles';
import Button 			from '@material-ui/core/Button';
import ButtonGroup 		from '@material-ui/core/ButtonGroup';
import Collapse 		from '@material-ui/core/Collapse';
import Grid 			from '@material-ui/core/Grid';
import Toolbar 			from '@material-ui/core/Toolbar';
import Typography 		from '@material-ui/core/Typography';

import requestServer 	from 'requestServer';


const useStyles = makeStyles(theme => ({
	toolbar: {
		margin: theme.spacing(3, 0, 0, 0),
		justifyContent: 'space-around',
		overflowX: 'auto',
		borderBottom: `1px solid ${theme.palette.divider}`,
		minWidth: 750,
	},
	logo: {
		maxWidth: 150
	},
	toolbarSecondary: {
		padding: theme.spacing(3, 3, 0, 0),
	},
	subButton: {
		textTransform: 'none',
		fontSize: 14
	},
	button: {
		textTransform: 'none',
		fontSize: 16
	},
}));

export default function Header(props) {
	const classes = useStyles();
	const { sections } = props;
	const [checked1, setChecked1] = React.useState(false);
	const [checked2, setChecked2] = React.useState(false);
	const [checked3, setChecked3] = React.useState(false);
	const [checked4, setChecked4] = React.useState(false);
	const [checked5, setChecked5] = React.useState(false);
	const [logoURL, setLogoURL] = React.useState(null);

	const handleOn1 = () => {
		setChecked1(true);
	};

	const handleOff1 = () => {
		setChecked1(false);
	};

	const handleOn2 = () => {
		setChecked2(true);
	};

	const handleOff2 = () => {
		setChecked2(false);
	};

	const handleOn3 = () => {
		setChecked3(true);
	};

	const handleOff3 = () => {
		setChecked3(false);
	};

	const handleOn4 = () => {
		setChecked4(true);
	};

	const handleOff4 = () => {
		setChecked4(false);
	};

	const handleOn5 = () => {
		setChecked5(true);
	};

	const handleOff5 = () => {
		setChecked5(false);
	};

	const checkedList = [checked1, checked2, checked3, checked4, checked5];
	const handlerOnList = [handleOn1, handleOn2, handleOn3, handleOn4, handleOn5];
	const handlerOffList = [handleOff1, handleOff2, handleOff3, handleOff4, handleOff5];

	useEffect(requestServer('header', 'logo', 'image', setLogoURL), []);

	return (
		<React.Fragment>
			<Grid container justify="center">
				<Grid item xs={10} sm={10}>
					<Toolbar className={ classes.toolbar }>
						<a href='/innotech'>
							<img src={logoURL} className={ classes.logo } />
						</a>
						<Grid container justify="flex-end" className={ classes.toolbarSecondary }>
							{ sections.map((section, i) => {
								if (i != sections.length - 1) {
									return (
										<Grid 
										item 
										xs 
										onMouseEnter={handlerOnList[i]} 
										onMouseLeave={handlerOffList[i]}>
											<Typography align='center'>
												{ section.title }
											</Typography>
											<Collapse 
											in={checkedList[i]} 
											align='center'
											className={ classes.buttonGroup }>
												<ButtonGroup
													variant="text"
													orientation="vertical"
													color="primary">
													{ section.subSections.map(subSection => (
														<Button href={ subSection.url } className={ classes.subButton }>
															{ subSection.title }
														</Button>
													))}
												</ButtonGroup>
											</Collapse>
										</Grid>
									);
								} else {
									return (
										<Grid item xs >
											<Typography align='center' >
												<Button href={ section.url } className={ classes.button } >
													{ section.title }
												</Button>
											</Typography>
										</Grid>
									);
								}
							})}
						</Grid>
					</Toolbar>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}

Header.defaultProps = {

};

Header.propTypes = {
	sections: PropTypes.array,
};
