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
import Paper from '@material-ui/core/Paper';
import MainImg from 'assets/home.png';
import profileImg from 'assets/profile.png';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import GetAppIcon from '@material-ui/icons/GetApp';
import Button from '@material-ui/core/Button';

import NewsPost from '../post/NewsPost';
import News from '../../data/news.js';
import Career from 'data/career.js';
import Greeting from 'data/greeting.js';
import Pdf from 'assets/pdf.pptm';

const useStyles = makeStyles(theme => ({
	icon: {
		padding: theme.spacing(4)
		// backgroundColor: 'black'
	},
  text: {
    fontFamily: 'Raleway',
    fontSize: 15,
    color: '#0000AA',
    padding: theme.spacing(1)
  }
  
}));

export default function Introduction(props) {
  const classes = useStyles();
  const theme = useTheme();
  const { title, description, mainImg } = props;
  const download = (() => {

  });


  return (
    <div className={classes.icon}>
      <Typography className={classes.text}>
        회사 소개 자료 다운로드
      </Typography>
      <Button>
        <a href={Pdf}>
          <GetAppIcon color='primary' fontSize='large' />
        </a>
      </Button>
    </div>
    );
}

Introduction.defaultProps = {
  title: 'Welcome',
  description: 'Multimedia Computing Lab was established under guidence of Professor Heung-Kyu Lee in 1986. \n',
  mainImg: MainImg
};

Introduction.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    mainImg: PropTypes.string,
};