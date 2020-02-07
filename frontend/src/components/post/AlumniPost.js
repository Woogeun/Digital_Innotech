import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  root: {
  },
  card: {
    margin: theme.spacing(1),
    height: 150,
    display: 'flex',
    backgroundColor: "#FAFAFA"
  },
  name: {
    margin: theme.spacing(0)
  },
  nameP: {
    fontFamily: 'Times New Roman',
    margin: theme.spacing(0)
  },
  info: {
    margin: theme.spacing(0, 0, 0, 0)
  },
  content: {
    padding: theme.spacing(3),
    height: '100%',
  },
  cardContent: {
    margin: theme.spacing(3),
    textAlign: 'center',
    display: 'flex',
    height: '80%'
  },
}));

export default function AlumniPost(props) {
  const classes = useStyles();
  const { peopleInfo } = props;

  return (
    <div className={classes.root}>
      <Card 
        elevation={0}
        className={classes.card}>
        <Grid
          container
          spacing={2}
          justify="space-around"
          direction='row'>
          <Grid
            item
            xs={12}
            className={classes.content}>
            <CardContent className={classes.cardContent}>
              <Grid
                container
                spacing={1}
                justify="center"
                alignItems="flex-start"
                direction='column'>
                <Typography className={classes.name} component="h5" variant="h6">
                  <p className={classes.nameP}>
                    {peopleInfo.name}
                  </p>
                </Typography>
                <Grid
                  container
                  className={classes.info}
                  spacing={1}
                  justify="flex-end"
                  alignItems="flex-start"
                  direction="column">
                  <Typography variant="subtitle2" color="textSecondary">
                    {peopleInfo.email}
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary">
                    {peopleInfo.loc}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}

AlumniPost.defaultProps = {
  peopleInfo: {
    name: '',
    email: '',
    loc: ''
  },
};

AlumniPost.propTypes = {
    peopleInfo: PropTypes.object,
};