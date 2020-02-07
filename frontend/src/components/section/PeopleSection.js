import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import PeoplePost from '../post/PeoplePost';
import NullPost from '../post/NullPost';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1, 0, 6, 0)
  },
  subTitle: {
    padding: theme.spacing(3, 0, 0),
    textAlign: 'start',
  },
  subtitleP: {
    fontFamily: 'Times New Roman',
    margin: theme.spacing(0),
  },
  col: {
    width: '100%'
  }
}));


export default function PeopleSection(props) {
  const classes = useStyles();
  const theme = useTheme();

  const {sectionTitle, peopleInfos, styleTheme} = props;

  return (
    <div className={classes.root}>
      <Typography className={classes.subTitle} color="textSecondary" variant="h6">
        <p className={classes.subtitleP}>
          {sectionTitle}
        </p>
      </Typography>
      <div className={classes.root}>
        <Divider />
      </div>
      {
        styleTheme === 'single' ? peopleInfos.map(peopleInfo => (
          <PeoplePost peopleInfo={peopleInfo} />
        )) : peopleInfos.map((peopleInfo, i) => ( i % 2 === 0 && (
          <Grid container direction='row' justify="space-around" alignItems="center">
            <Grid item xs={12} md={12} lg={6}>
              <PeoplePost peopleInfo={peopleInfos[i]} styleTheme={i % 4 === 2 ? 'light' : 'dark'} />
            </Grid>
            <Grid item xs={12} md={12} lg={6}>
            {
              i+1 < peopleInfos.length 
              ? (<PeoplePost peopleInfo={peopleInfos[i + 1]} styleTheme={i % 4 === 2 ? 'dark' : 'light'} />)
              : (<NullPost bannerNumber={i % 3}/>)
            }
            </Grid>
          </Grid>
          )
        ))
      }
    </div>
  );
}

PeopleSection.defaultProps = {
  sectionTitle: 'Advisor',
  peopleInfos: undefined,
  styleTheme: 'single'
};

PeopleSection.propTypes = {
    sectionTitle: PropTypes.string,
    peopleInfos: PropTypes.array,
    styleTheme: PropTypes.string,
};