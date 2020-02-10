import React, { useState }  from 'react';
import PropTypes            from 'prop-types';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button      				from '@material-ui/core/Button';
import GetAppIcon       		from '@material-ui/icons/GetApp';
import Typography       		from '@material-ui/core/Typography';

import Pdf from 'assets/pdf.pptm';


const useStyles = makeStyles(theme => ({
	icon: {
		padding: theme.spacing(4)
	},
	text: {
		fontFamily: 'Raleway',
		fontSize: 15,
		color: '#0000AA',
		padding: theme.spacing(1)
	}
}));

export default function Introduction(props) {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<div className={classes.icon}>
			<Typography className={classes.text}>
				회사 소개 자료 다운로드
			</Typography>
			<Button>
				<a href={Pdf}>
					<GetAppIcon color='primary' fontSize='large' />
				</a>
			</Button>
		</div>
	);
}

Introduction.defaultProps = {

};

Introduction.propTypes = {
	
};