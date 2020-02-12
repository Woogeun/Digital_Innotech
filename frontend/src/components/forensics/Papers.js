import React, { useState } 	from 'react';
import PropTypes 			from 'prop-types';

import { makeStyles } 	from '@material-ui/core/styles';
import Box 				from '@material-ui/core/Box';
import Divider 			from '@material-ui/core/Divider';
import Grid 			from '@material-ui/core/Grid';
import Paper 			from '@material-ui/core/Paper';
import Tab 				from '@material-ui/core/Tab';
import Tabs 			from '@material-ui/core/Tabs';
import Typography 		from '@material-ui/core/Typography';

import papers from 'data/papers.js'


function a11yProps(index) {
	return {
		id: `scrollable-auto-tab-${index}`,
		'aria-controls': `scrollable-auto-tabpanel-${index}`,
	};
}

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<Typography
		component="div"
		role="tabpanel"
		hidden={value !== index}
		id={`scrollable-auto-tabpanel-${index}`}
		aria-labelledby={`scrollable-auto-tab-${index}`}
		{...other}>
			{value === index && <Box p={3}>{children}</Box>}
		</Typography>
  );
}


const useStyles = makeStyles(theme => ({
	root: {

	},
	container: {
		
	}
}));


export default function Papers(props) {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Paper square elevation={0}>
			<Tabs
            value={value}
            onChange={handleChange}
            indicatorColor='primary'
            textColor='primary'>
				<Tab label='Journals'{...a11yProps(0)} />
				<Tab label='Conference'{...a11yProps(1)} />
			</Tabs>
			<TabPanel value={value} index={0}>
				<Typography variant='h6'>
					국제 저널
				</Typography>
				{ papers.journals.map(content => {
					return (
						<p> {content} </p>
					);
				})}
			</TabPanel>
			<TabPanel value={value} index={1}>
				<Typography variant='h6'>
					국제 학술 대회
				</Typography>
				{ papers.conference.map(content => {
					return (
						<p> {content} </p>
					);
				})}
			</TabPanel>
		</Paper>
	);  
}

Papers.defaultProps = {

};

Papers.propTypes = {
	
};
