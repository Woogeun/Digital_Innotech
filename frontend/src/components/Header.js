import React, { useState } 	from 'react';
import PropTypes 			from 'prop-types';

import { makeStyles } 	from '@material-ui/core/styles';
import Button 			from '@material-ui/core/Button';
import ButtonGroup 		from '@material-ui/core/ButtonGroup';
import Collapse 		from '@material-ui/core/Collapse';
import Grid 			from '@material-ui/core/Grid';
import Typography 		from '@material-ui/core/Typography';
import Toolbar 			from '@material-ui/core/Toolbar';

import Logo 	from 'assets/logo.png';


const useStyles = makeStyles(theme => ({
	toolbar: {
		margin: theme.spacing(3, 0, 0, 0),
		justifyContent: 'space-around',
		overflowX: 'auto',
		// textAlign: 'center',
		borderBottom: `1px solid ${theme.palette.divider}`,
		minWidth: 750,
	},
	logo: {
		maxWidth: 150
	},
	toolbarSecondary: {
		padding: theme.spacing(3, 3, 0, 0),
	},
	buttonGroup: {
		// position: 'absolute',
	}
}));

export default function Header(props) {
	const classes = useStyles();
	const { sections } = props;
	const [checked1, setChecked1] = React.useState(false);
	const [checked2, setChecked2] = React.useState(false);
	const [checked3, setChecked3] = React.useState(false);

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

	const checkedList = [checked1, checked2, checked3];
	const handlerOnList = [handleOn1, handleOn2, handleOn3];
	const handlerOffList = [handleOff1, handleOff2, handleOff3];

	return (
		<React.Fragment>
			<Grid container justify="center">
				<Grid item xs={10} sm={10}>
					<Toolbar className={ classes.toolbar }>
						<a href='/'>
							<img src={Logo} className={ classes.logo } />
						</a>
						<Grid container justify="flex-end" className={ classes.toolbarSecondary }>
							{ sections.map((section, i) => {
								return (
									<Grid 
									item 
									xs={4} 
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
												color="primary"
												>
												{ section.subSections.map(subSection => (
													<Button href={ subSection.url }>
														{ subSection.title }
													</Button>
												))}
											</ButtonGroup>
										</Collapse>
									</Grid>
								);
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
