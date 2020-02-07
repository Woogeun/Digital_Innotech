import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

import Banner1 from '../../assets/light_banner3.jpg';
import Banner2 from '../../assets/light_banner2.jpg';
import Banner3 from '../../assets/light_banner1.jpg';

const banners = [Banner1, Banner2, Banner3];

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
  media: {
    height: 250,
    opacity: '40%',
  },
  nullCard: {
    margin: theme.spacing(1),
    height: 250,
    display: 'flex',
    backgroundColor: "#FAFAFA"
  }
}));

export default function NullPost(props) {
  const classes = useStyles();
  const { bannerNumber } = props;

  return (
    <Card
      elevation={0}
      className={classes.card}>
      <CardMedia
        component='img'
        className={classes.media}
        image={banners[bannerNumber]}
        title='placeholder'/>
    </Card>
  )
}