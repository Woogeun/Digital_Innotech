import React, { useState } 	from 'react';
import PropTypes 			from 'prop-types';

import { makeStyles } 	from '@material-ui/core/styles';
import Button 			from '@material-ui/core/Button';
import ButtonGroup 		from '@material-ui/core/ButtonGroup';
import Grid 			from '@material-ui/core/Grid';
import Typography 		from '@material-ui/core/Typography';
import Toolbar 			from '@material-ui/core/Toolbar';

import Logo 	from 'assets/logo.png';


const useStyles = makeStyles(theme => ({
	toolbar: {
		margin: theme.spacing(3, 0, 0, 0),
		justifyContent: 'space-around',
		overflowX: 'auto',
	},
	logo: {
		maxWidth: 150
	},
	toolbarSecondary: {
		padding: theme.spacing(3, 0, 0, 0),
		borderBottom: `1px solid ${theme.palette.divider}`,
	},
	buttonGroup: {
		
	}
}));

export default function Header(props) {
	const classes = useStyles();
	const { sections } = props;

	return (
		<React.Fragment>
			<Grid container justify="center">
				<Grid item xs={10} sm={10}>
					<Toolbar className={ classes.toolbar }>
						<a href='/'>
							<img src={Logo} className={ classes.logo } />
						</a>
						<Grid container justify="flex-end" className={ classes.toolbarSecondary }>
							{ sections.map(section => (
								<Grid item xs={4}>
									<React.Fragment>
										<Typography>
											{ section.title }
										</Typography>
										<ButtonGroup
											variant="text"
											orientation="vertical"
											color="primary"
											className={ classes.buttonGroup }>
											{ section.subSections.map(subSection => (
												<Button href={ subSection.url }>
													{ subSection.title }
												</Button>
											))}
										</ButtonGroup>
									</React.Fragment>
								</Grid>
							))}
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
