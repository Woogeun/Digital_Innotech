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
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

import NewsPost from '../post/NewsPost';
import News from '../../data/news.js';
import Career from 'data/career.js';
import Greeting from 'data/greeting.js';
import History from 'data/history.js';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: 100,
    maxWidth: 800,
    padding: theme.spacing(4)
  },
  container: {

  },
  year: {
    fontFamily: 'Raleway',
    fontSize: 12,
    color: '#323232',
    
  },
  yearText: {
    // fontFamily: 'Raleway',
    fontSize: 20,
    // color: '#323232'
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    width: 75,
    height: 75,
    marginRight: theme.spacing(2)
  },
  listItem: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2)
  },
  description: {
    fontFamily: 'Raleway',
    fontSize: 15,
    color: '#323232'
  },
  descriptionText: {
    fontFamily: 'Raleway',
    fontSize: 17,
    color: '#323232'
  }
  
}));

export default function Histories(props) {
  const classes = useStyles();
  const theme = useTheme();
  const { title, description, mainImg } = props;


  return (
    <List className={classes.root}>
      { History.map((content, i) => {
        return (
          <div className={classes.container}>
          <ListItem className={classes.listItem}>
            <ListItemAvatar>
              <Avatar className={classes.yearText}>
                {content.year}
              </Avatar>
            </ListItemAvatar>
            <ListItemText >
              <Typography align='right' className={classes.descriptionText}>
                {content.description[0]}
              </Typography>
            </ListItemText>
          </ListItem>
          {content.description.map((details, i) => {
            if (i != 0) {
              return (
                <ListItem className={classes.listItem}>
                  <ListItemText inset >
                    <Typography inset align='right' className={classes.descriptionText}>
                      {details}
                    </Typography>
                  </ListItemText>
                </ListItem>
              );
            }})}
          <Divider variant='middle' compoment='li'/>
          </div>
        );
      })}
    </List>
  );
}

          {/*<div>
          <Grid
            container
            className={classes.container}
            spacing={2}
            justify='center'>
            <Grid
              item
              container
              xs={3}
              className={classes.year}
              justify='center'
              alignItems='center'>
              <Avatar className={classes.yearText}>
                {content.year}
              </Avatar>
            </Grid>
            <Grid
              item
              container
              xs
              className={classes.description}
              alignItems='center'>
                {content.description.map((detail, i) => {
                  if (content.description.length == i-1) {
                    return (
                      <div>
                        <Typography align='left' className={classes.descriptionText}>
                          {detail}
                        </Typography>     
                      </div>);
                    } else {
                      return (
                        <div>
                          <Typography align='left' className={classes.descriptionText}>
                            {detail}
                          </Typography>     
                          <br/>
                        </div>
                      );
                    }
                  }
                  
                )}
            </Grid>

          </Grid> 
          <Divider />
          </div>*/}

Histories.defaultProps = {
  title: 'Welcome',
  description: 'Multimedia Computing Lab was established under guidence of Professor Heung-Kyu Lee in 1986. \n',
  mainImg: MainImg
};

Histories.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    mainImg: PropTypes.string,
};