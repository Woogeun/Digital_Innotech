import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Paper from '@material-ui/core/Paper';

import ResearchInterestPost from '../post/ResearchInterestPost';
import ResearchPanel from '../ResearchPanel';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(12, 20, 0, 20),
    textAlign: 'center',
  },
  titleP: {
    fontFamily: 'Times New Roman'
  },
}));

export default function Research() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <div className={classes.root}>
        <Typography color="textPrimary" variant="h5">
          <p className={classes.titleP}>
            Research
          </p>
        </Typography>
        <Divider />
        <ResearchInterestPost />
        <ResearchPanel />
      </div>
    </div>
  );
}