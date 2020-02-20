import React, { useState, useEffect } 	from 'react';
import PropTypes 						from 'prop-types';

import { makeStyles } 	from '@material-ui/core/styles';
import Box 				from '@material-ui/core/Box';
import Paper 			from '@material-ui/core/Paper';
import Tab 				from '@material-ui/core/Tab';
import Tabs 			from '@material-ui/core/Tabs';
import Typography 		from '@material-ui/core/Typography';

import TextListPost 	from 'components/post/TextListPost';
import requestServer 	from 'requestServer';


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
	const [journals, setJournals] 		= useState({list_of_text: []});
	const [conferences, setConferences] = useState({list_of_text: []});

	useEffect(requestServer('forensics/paper', 'journal', 'json', setJournals), []);
	useEffect(requestServer('forensics/paper', 'conference', 'json', setConferences), []);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
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
				<TextListPost content={ journals.list_of_text } type='body1'/>
			</TabPanel>
			<TabPanel value={value} index={1}>
				<Typography variant='h6'>
					국제 학술 대회
				</Typography>
				<TextListPost content={ conferences.list_of_text } type='body1'/>
			</TabPanel>
		</Paper>
	);  
}

Papers.defaultProps = {

};

Papers.propTypes = {
	
};
