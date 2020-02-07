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
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  card: {
    padding: theme.spacing(1),
    height: 240,
    display: 'flex',
  },
  titleP: {
    fontFamily: 'Times New Roman'
  },
  bigCard: {
    padding: theme.spacing(1),
    display: 'flex',
    width: '100%',
    height: 300,
    backgroundColor: '#FAFAFA',
  },
  bicCardDetails: {
    margin: theme.spacing(6, 0, 0, 0),
    display: 'flex',
    flex: 1,
  },
  cardDetails: {
    margin: theme.spacing(0),
    flex: 1,
  },
  cardMedia: {
    display: 'flex',
    width: '50%',
  },
  description: {
    textAlign: 'start'
  },
  iframe100: {   
    border: 'none',   
    height: '100%',   
    width: '100%', 
  }
}));

export default function FeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Grid 
      item 
      xs={12} 
      md={12}
      lg>
      <CardActionArea component="a" href="/">
        <Card
          elevation={0}
          className={post.cols===2 ? classes.bigCard : classes.card}>
          <div className={post.cols===2 ? classes.bicCardDetails : classes.cardDetails}>
            <CardContent>
              <Grid 
                xs={11}
                md={11}
                lg
                spacing={0} 
                container
                direction='column' 
                justify="flex-end" 
                alignItems="flex-start">
                <Typography component="h5" variant="h6">
                  <p className={classes.titleP}>
                    {post.title}
                  </p>
                </Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  {post.date}
                </Typography>
                <Divider variant="middle"/>
                <Box className={classes.description} component="div" whiteSpace="normal">
                  <Typography color="textPrimary" variant="body2">
                    {
                      post.description.split('\n').map( line => {
                        return (<span>{line}<br/></span>)
                      })
                    }
                  </Typography>
                </Box>
                {/*<Typography variant="subtitle2" color="primary">
                  Continue reading...
                </Typography>*/}
              </Grid>
            </CardContent>
          </div>
          {
            post.type === 'video' && 
              <CardMedia className={classes.cardMedia} title={post.title} >
                <iframe src={post.url}
                  className={classes.iframe100}
                  frameBorder='0'
                  allow='autoplay; encrypted-media'
                  allowFullScreen
                  title='video'
                />
              </CardMedia>
          }
        </Card>
      </CardActionArea>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.object,
};