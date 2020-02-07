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
    height: 250,
    display: 'flex',
  },
  name: {
    margin: theme.spacing(0, 0, 2, 0)
  },
  nameP: {
    fontFamily: 'Times New Roman',
    margin: theme.spacing(0)
  },
  divider: {
    margin: theme.spacing(1, 0, 2, 0),
  },
  info: {
    margin: theme.spacing(1, 0, 0, 0)
  },
  basicContent: {
    padding: theme.spacing(3),
    height: '100%',
    backgroundColor: '#FAFAFA'
  },
  colorContent: {
    padding: theme.spacing(3),
    height: '100%',
  },
  cardContent: {
    margin: theme.spacing(3),
    textAlign: 'center',
    display: 'flex',
    height: '80%'
  },
  smallMedia: {
    width: '30%',// 16:9
    textAlign: 'center',
    border:"1px #FAFAFA",
    borderRadius: '10px'
  },
  media: {
    width: '30%',
  },
}));

export default function PeoplePost(props) {
  const classes = useStyles();
  const { peopleInfo, styleTheme } = props;

  return (
    <div className={classes.root}>
      <Card 
        elevation={0}
        className={classes.card}>
        <Grid
          container
          spacing={2}
          justify="space-around"
          alignItems='center'
          direction='row'>
          { peopleInfo.profile && (
          <CardMedia
            component="img"
            className={styleTheme === 'basic' ? classes.media : classes.smallMedia}
            image={peopleInfo.profile}
            title="Live from space album cover">
          </CardMedia>
          )}
          <Grid
            item
            xs={peopleInfo.profile ? 7 : 12}
            className={styleTheme === 'light' ? classes.colorContent : classes.basicContent}>
            <CardContent className={classes.cardContent}>
              <Grid
                container
                spacing={1}
                justify="flex-end"
                alignItems="flex-end"
                direction='column'>
                <Typography className={classes.name} component="h5" variant="h6">
                  <p className={classes.nameP}>
                    {peopleInfo.name}
                  </p>
                </Typography>
                <div className={classes.divider}>
                  <Divider />
                </div>
                <Grid
                  container
                  className={classes.info}
                  spacing={1}
                  justify="flex-end"
                  alignItems="flex-end"
                  direction="column">
                  { peopleInfo.homepage && 
                    <Link
                      href={peopleInfo.homepage}
                      target="_blank"
                      rel="noopener"
                      color='inherit'>
                      homepage
                    </Link>
                  }
                  <Typography variant="subtitle2" color="textSecondary">
                    {peopleInfo.email}
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary">
                    {peopleInfo.office}
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

PeoplePost.defaultProps = {
  sectionTitle: 'Advisor',
  peopleInfo: {
    name: '',
    email: '',
    profile: '',
    office: ''
  },
  styleTheme: 'basic',
};

PeoplePost.propTypes = {
    sectionTitle: PropTypes.string,
    peopleInfo: PropTypes.object,
    styleTheme: PropTypes.string,
};