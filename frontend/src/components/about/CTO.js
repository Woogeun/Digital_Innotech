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
import profileImg from 'assets/profile.png'

import NewsPost from '../post/NewsPost';
import News from '../../data/news.js';
import Career from 'data/career.js';
import Greeting from 'data/greeting.js';

const useStyles = makeStyles(theme => ({
	container: {
		minHeight: 100,
		// backgroundColor: 'black'
	},
	profile: {
		padding: theme.spacing(4),
		width: '50%',
		// backgroundColor: 'red'
	},
	career: {
		padding: theme.spacing(1),
		height: '100%',
		// backgroundColor: 'blue'
	},
	careerText: {
		fontFamily: 'Raleway',
		fontSize: 11,
		color: '#323232'
	},
	greeting: {
		height: '100%',
		padding: theme.spacing(2),
		// backgroundColor: 'blue'
	},
	greetingText: {
		fontFamily: 'Raleway',
		fontSize: 17,
		color: '#323232'
	},
	card: {
		// backgroundColor: '#FAFAFA',
		// margin: theme.spacing(2, 0),
		// display: 'flex',
		// minHeight: 300,
		maxHeight: 150,
		maxWidth: 200,
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
      	spacing={2}>
      	<Grid 
      		container
      		item
      		xs={5}
      		direction='column'
      		wrap='nowrap'
      		spacing={2}>
      		<Grid item xs justify='center'>
      			{/*<Paper elevation={3} className={classes.profile}>*/}
      				<img src={profileImg} className={classes.profile} />
      			{/*</Paper>*/}
      		</Grid>
      		<Grid item xs>
      			<Paper elevation={3}  className={classes.career}>
      				<Typography align='left' className={classes.careerText}>
      					교육<br/>
      					{
      						Career.education.map( content => {
      							return (<span>{content.year} : {content.description}<br/></span>)
      						})
      					}
						<br/>
						경력<br/>
						{
							Career.details.map( content => {
      							return (<span>{content.year} : {content.description}<br/></span>)
      						})
						}

      				</Typography>
      			</Paper>
      		</Grid>
      	</Grid>
      	<Grid 
      		item 
      		xs>
      		<Paper className={classes.greeting} elevation={3}>
      			<Typography align='left' className={classes.greetingText}>
      				{
						Greeting.split('\n').map( content => {
  							return (<span>{content}<br/></span>)
  						})
					}
      			</Typography>
      		</Paper> 
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