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

import NewsPost from '../post/NewsPost';
import News from '../../data/news.js';

const useStyles = makeStyles(theme => ({
	container: {
		minHeight: 300,
		// backgroundColor: 'black'
	},
	cto: {
		height: '100%',
		// padding: theme.spacing(16),
		// backgroundColor: 'red'
		// gridGap: theme.spacing(3),
	},
	profile: {
		// padding: theme.spacing(1),
		height: '100%',
		// backgroundColor: 'red'
	},
	career: {
		// padding: theme.spacing(1),
		height: '100%',
		// backgroundColor: 'blue'
	},
	greeting: {
		height: '100%',
		// padding: theme.spacing(16),
		// backgroundColor: 'blue'
	},
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
  
}));

export default function CTO(props) {
  const classes = useStyles();
  const theme = useTheme();
  const { title, description, mainImg } = props;


  return (
    <div>
      <Grid 
      	container 
      	justify='center'
      	className={classes.container} 
      	spacing={3}>
      	<Grid 
      		container
      		item
      		xs={4}
      		direction='column'
      		
      		spacing={2}>
      		<Grid item xs>
      			<Paper elevation={5} className={classes.profile}/>
      		</Grid>
      		<Grid item xs>
      			<Paper elevation={5}  className={classes.career}/>
      		</Grid>
      		{/*<Grid 
      		item >
      			<Paper className={classes.cto} elevation={5}/> 
      			<Paper className={classes.cto} elevation={5}/> 
      		</Grid>*/}
      	</Grid>
      	<Grid 
      		item 
      		xs>
      		<Paper className={classes.greeting} elevation={5}/> 
      	</Grid>
      </Grid>
    </div>
    );
}

CTO.defaultProps = {
  title: 'Welcome',
  description: 'Multimedia Computing Lab was established under guidence of Professor Heung-Kyu Lee in 1986. \n',
  mainImg: MainImg
};

CTO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    mainImg: PropTypes.string,
};