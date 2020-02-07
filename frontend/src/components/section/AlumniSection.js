import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import AlumniPost from '../post/AlumniPost';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1, 0, 5, 0)
  },
  subTitle: {
    padding: theme.spacing(3, 0, 0),
    textAlign: 'start',
  },
  subtitleP: {
    fontFamily: 'Times New Roman',
    margin: theme.spacing(0),
  },
}));


export default function AlumniSection(props) {
  const classes = useStyles();
  const theme = useTheme();

  const { phdInfos, masterInfos} = props;
  return (
    <div className={classes.root}>
      <Typography className={classes.subTitle} color="textSecondary" variant="h6">
        <p className={classes.subtitleP}>
          Alumni
        </p>
      </Typography>
      <div className={classes.root}>
      <Divider />
      </div>
      <Typography className={classes.subTitle} color="textSecondary" variant="h6">
        <p className={classes.subtitleP}>
          Ph. D.
        </p>
      </Typography>
      {phdInfos.map(phd => (
        <AlumniPost peopleInfo={phd} />
      ))}
      <Typography className={classes.subTitle} color="textSecondary" variant="h6">
        <p className={classes.subtitleP}>
          Masters
        </p>
      </Typography>
      {masterInfos.map(master => (
        <AlumniPost peopleInfo={master} />
      ))}
    </div>
  );
}

AlumniSection.propTypes = {
    phdInfos: PropTypes.array,
    masterInfos: PropTypes.array,
};