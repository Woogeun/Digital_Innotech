import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from'@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import MainImg from 'assets/home.png';

import NewsPost from '../post/NewsPost';
import News from '../../data/news.js';

const useStyles = makeStyles(theme => ({
  card: {
    backgroundColor: '#FAFAFA',
    margin: theme.spacing(2, 0),
    display: 'flex',
    minHeight: 300,
    width: '100%',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  detailTitles: {
    padding: theme.spacing(10, 2, 0, 0),
    display: 'flex-end',
    flexDirection: 'column',
  },
  description: {
    textAlign: 'end',
  },
  newsTitle: {
    margin: theme.spacing(6, 3, 0, 2),
    textAlign: 'start',
  },
  content: {
      flex: '1 0 auto',
  },
  cover: {
      width: '50%',
  },
  media: {
    // opacity: '40%',
    // width: '50%',// 16:9
  },
  titleP: {
    fontFamily: 'Times New Roman',
  },
  posts: {
    margin: theme.spacing(2),
  },
  postBigTile: {
    textAlign: 'center',
    justify: 'center',
    alignItems: 'center',
    display: 'flex',
    width: '100%',
    padding: theme.spacing(1),
  },
  postTile: {
    textAlign: 'center',
    justify: 'center',
    alignItems: 'center',
    display: 'flex',
    width: '100%'
  }
}));

export default function Home(props) {
  const classes = useStyles();
  const theme = useTheme();
  const { title, description, mainImg } = props;

  return (
    <div>
      <Card 
          elevation={0}
          className={classes.card}>
          {/*<div className={classes.details}>
              <CardContent className={classes.content}>
                <Grid 
                  className={classes.detailTitles} 
                  spacing={2} 
                  container
                  direction='column' 
                  justify="flex-end" 
                  alignItems="flex-end">
                  <Typography color="textPrimary" component="h5" variant="h5">
                    <p className={classes.titleP}>
                      {title}
                    </p>
                  </Typography>
                  <Box className={classes.description} component="div" whiteSpace="normal">
                    <Typography color="textSecondary" variant="body1">
                      {
                        description.split('\n').map( line => {
                          return (<span>{line}<br/></span>)
                        })
                      }
                    </Typography>
                  </Box>
                </Grid>
              </CardContent>
          </div>*/}
            <CardMedia
              component="img"
              className={classes.media}
              image={mainImg}
              title="Live from space album cover"
            />

      </Card>
      {/*<div>
        <Typography className={classes.newsTitle} color="textPrimary" variant="h6">
          <p className={classes.titleP}>
            News
          </p>
        </Typography>
      </div>
      <Divider />
      <div className={classes.posts}></div>
      <Grid 
        container 
        spacing={16}
        direction='column'
        justify="center"
        alignItems="center">
        <Grid spacing={1} className={classes.postBigTile} item>
          <NewsPost post={News[0]} />
        </Grid>
        <Grid
          container
          spacing={2}
          className={classes.postTile}>
          <NewsPost post={News[1]} />
          <NewsPost post={News[2]} />
        </Grid>
        <Grid spacing={2} className={classes.postBigTile} item>
          <NewsPost post={News[3]} />
        </Grid>
      </Grid>*/}
    </div>
    );
}

Home.defaultProps = {
  title: 'Welcome',
  description: 'Multimedia Computing Lab was established under guidence of Professor Heung-Kyu Lee in 1986. \n',
  mainImg: MainImg
};

Home.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    mainImg: PropTypes.string,
};