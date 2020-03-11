import React, { useState, useEffect } 	from 'react';
import PropTypes 						from 'prop-types';

import { makeStyles } 	from '@material-ui/core/styles';
import Box 				from '@material-ui/core/Box';
import Grid 			from '@material-ui/core/Grid';
import Paper 			from '@material-ui/core/Paper';
import Tab 				from '@material-ui/core/Tab';
import Tabs 			from '@material-ui/core/Tabs';
import Typography 		from '@material-ui/core/Typography';

import TextListPost 	from 'components/post/TextListPost';
import { requestServer } 	from 'requestServer.js';
import TextEditor 		from 'components/form/TextEditor';
import TextAdder 		from 'components/form/TextAdder';


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
		
	},
	title: {
		height: 100,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		borderBottom: `1px solid ${theme.palette.divider}`,

	},
}));


export default function Papers(props) {
	const classes = useStyles();
	const [value, setValue] 			= React.useState(0);
	const [journals, setJournals] 		= useState({list_of_text: []});
	const [conferences, setConferences] = useState({list_of_text: []});
	const [title, setTitle] 			= useState(null);

	useEffect(requestServer('forensics/paper', 'journal', 'json', setJournals), []);
	useEffect(requestServer('forensics/paper', 'conference', 'json', setConferences), []);
	useEffect(requestServer('forensics/paper', 'title', 'text', setTitle), []);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Grid container justify='center' className={ classes.root } spacing={2}>
			<Grid item xs={12} >
				<TextEditor content={title} session='forensics/paper' data='title' type='text' />
			</Grid>
			<Paper square elevation={0} className={ classes.root }>
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
					{ journals.list_of_text.map((content, i) => {
						return (
							<TextEditor content={content} session='forensics/paper' data='journal' type='json' />
						);
					})}
					<TextAdder session='forensics/paper' data='journal' type='json' />
				</TabPanel>
				<TabPanel value={value} index={1}>
					<Typography variant='h6'>
						국제 학술 대회
					</Typography>
					{ conferences.list_of_text.map((content, i) => {
						return (
							<TextEditor content={content} session='forensics/paper' data='conference' type='json' />
						);
					})}
					<TextAdder session='forensics/paper' data='conference' type='json' />
				</TabPanel>
			</Paper>
		</Grid>
	);  
}

Papers.defaultProps = {

};

Papers.propTypes = {
	
};
