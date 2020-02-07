import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Grid from'@material-ui/core/Grid';

import People from '../../data/members.js';
import PeopleSection from '../section/PeopleSection';
import AlumniSection from '../section/AlumniSection';


const useStyles = makeStyles(theme => ({
  title: {
    margin: theme.spacing(12, 3, 0, 2),
    textAlign: 'center',
  },
  titleP: {
    fontFamily: 'Times New Roman'
  },
  contentWrap: {
    textAlign: 'center'
  },
  content: {
    padding: theme.spacing(3, 25),
  },
  card: {
    backgroundColor: '#FAFAFA',
    display: 'flex',
    height: 300,
  },
}));

export default function Members() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div>
      <div>
        <Typography className={classes.title} color="textPrimary" variant="h5">
          <p className={classes.titleP}>
            People
          </p>
        </Typography>
      </div>
      <div className={classes.contentWrap}>
      <Grid 
        container
        direction='column'
        spacing={1}
        justify='center'
        alignItems='stretch'
        className={classes.content}>
        <PeopleSection 
          sectionTitle='Advisor'
          peopleInfos={People.advisor}/>
        <PeopleSection
          sectionTitle='Ph. D. Candidates'
          peopleInfos={People.phd} 
          styleTheme='mult'/>
        <PeopleSection
          sectionTitle='Masters Candidates'
          peopleInfos={People.masters} 
          styleTheme='mult'/>
        <PeopleSection
          sectionTitle='Officer'
          peopleInfos={People.officer} />
        <AlumniSection
          phdInfos={People.alumni.phd}
          masterInfos={People.alumni.masters} />
      </Grid>
      </div>
    </div>
  );
}