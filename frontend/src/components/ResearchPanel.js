import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Fab from '@material-ui/core/Fab';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';

import ResearchData from '../data/research.js';
const researches = [
  'Multimedia Security', 
  'Image Processing',
  'System'
]

const tabStyle = makeStyles({
  root: {
    textAlign: 'left',
  }
});

function TabData(props) {
  const {children, title} = props;
  const classes = tabStyle();

  return (
    <div text-align='left !important;'>
      <div className={classes.root}>
        <Typography
          variant='h6'>
          {title}
        </Typography>
        <div className={classes.root}>
          {children}
        </div>
      </div>
    </div>
  );
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
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

function SubTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-sub-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-sub-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

SubTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11ySubProps(index) {
  return {
    id: `scrollable-auto-sub-tab-${index}`,
    'aria-controls': `scrollable-auto-sub-tabpanel-${index}`,
  };  
}

const useStyles = makeStyles(theme => ({
  dataPanel: {
    margin: theme.spacing(4, 0, 0, 0),
    textAlign: 'left',
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing(10),
    right: theme.spacing(10),
    backgroundColor: 'white',
    elevation: 0,
  },
  subTabRoot: {
    flexGrow: 1,
    display: 'flex',
  },
  subTab: {
    minWidth: '110px',
    display: 'block'
  },
  subTabs: {
    borderRight: '1px solid $(theme.palette.divider}',
    minWidth: '110px',

  }
}));

export default function ResearchPanel() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [subValue, setSubValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSubChange = (event, newValue) => {
    setSubValue(newValue);
  }

  return (
    <div>
      <div className={classes.dataPanel}>
        <Paper 
          square elevation={0}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor='primary'
            textColor='primary'>
            <Tab label='Multimedia Security' {...a11yProps(0)} />
            <Tab label='something2' {...a11yProps(1)} />
          </Tabs>
          <Fab sizeSmall href="#top" aria-label='top' className={classes.fab} color='#FAFAFA'>
            <UpIcon />
          </Fab>
        </Paper>
        <TabPanel value={value} index={0}>
          <div className={classes.subTabRoot}>
            <Paper
              square elevation={0}
              style={{backgroundColor: '#FAFAFA'}}>
              <Tabs
                orientation='vertical'
                variant='scrollable'
                value={subValue}
                onChange={handleSubChange}
                className={classes.subTabs}
                aria-label='int/cnf'>
                <Tab small className={classes.subTab} label='Journals & Books' {...a11ySubProps(0)} />
                <Tab small className={classes.subTab} label='conference' {...a11ySubProps(1)} />
              </Tabs>
            </Paper>
            <SubTabPanel value={subValue} index={0}>
              <TabData 
                children={ResearchData.multimediaSecurityInt} 
                title='International Journals & Book Chapter'/>
            </SubTabPanel>
            <SubTabPanel value={subValue} index={1}>
              <TabData 
                children={ResearchData.multimediaSsecurityCnf} 
                title='International Conference' />
            </SubTabPanel>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item 2
        </TabPanel>
      </div>
    </div>
  );
}