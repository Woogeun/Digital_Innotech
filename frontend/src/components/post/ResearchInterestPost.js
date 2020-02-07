import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Banner from '../../assets/light_banner2.jpg';

const interests = [
  'Multimedia Forensics',
  'Digital Watermarking',
  'Steganography & Steganalysis',
  'Digital Right Management'
]

const useStyles = makeStyles(theme => ({
  card: {
    margin: theme.spacing(4, 0),
    height: 220,
    display: 'flex',
    backgroundColor: "#FAFAFA"
  },
  title: {
    margin: theme.spacing(0, 0, -2, 0),
  },
  titleP: {
    fontFamily: 'Times New Roman',
    textAlign: 'right'
  },
  image: {
    width: '50%',
    opacity: '40%'
  },
  cardcontent: {
    width: '50%',
  },
  content: {
    width: '100%',
  },
  innerContent: {
    margin: theme.spacing(0, -2),
    padding: theme.spacing(2),
    textAlign: 'right',
  }
}));

export default function ResearchInterestPost() {
  const classes = useStyles();
  return(
    <div>
      <Card 
        elevation={0}
        className={classes.card}>
        <CardContent 
          className={classes.cardcontent}>
          <Grid
            container
            className={classes.content}
            justify='space-between'
            direction='column'
            alignItems='stretch'>
            <Typography 
              className={classes.title}
              variant="h6" >
              <p className={classes.titleP}>
                Research interests
              </p>
            </Typography>
            <Grid
              item
              xs={12}>
              <Box className={classes.innerContent}>
                {
                  interests.map(interest => (
                    <Typography 
                      color="textSecondary"
                      variant='subtitle2'>{interest}</Typography>
                  ))
                }
              </Box>
            </Grid>
          </Grid>
        </CardContent>
        <CardMedia
          className={classes.image}
          component='img'
          image={Banner}
          title='research interests'>
        </CardMedia>
      </Card>
    </div>
  );
}