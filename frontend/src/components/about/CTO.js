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

const useStyles = makeStyles(theme => ({
	container: {
		minHeight: 100,
		// backgroundColor: 'black'
	},
	profile: {
		// padding: theme.spacing(1),
		width: '80%',
		// backgroundColor: 'red'
	},
	career: {
		padding: theme.spacing(1),
		height: '100%',
		// backgroundColor: 'blue'
	},
	careerText: {
		fontFamily: 'Raleway',
		fontSize: 15,
		color: '#323232'
	},
	greeting: {
		height: '100%',
		padding: theme.spacing(2),
		// backgroundColor: 'blue'
	},
	greetingText: {
		fontFamily: 'Raleway',
		fontSize: 15,
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
      		xs={4}
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
      				<Typography align='left'>
      					교육<br/>
						1978 : 서울대학교 전자공학과 학사<br/>
						1981년, 1984년 : KAIST 전산학부 석사, 박사<br/><br/>
						경력<br/>
						1986년 ~ 현재까지 : KAIST 전산학부 교수<br/>
						1990년 ~ 1999년 : KAIST 인공위성연구센터 연구기획실장<br/>
						1999년 ~ 2008년 : KAIST 첨단정보기술연구센터 부소장<br/>
						2000년 : ㈜디지탈이노텍 KAIST 교원 창업, 대표 겸 CEO<br/>
						2006년 ~ 2017년 : KAIST 융합형보안기술연구센터 소장<br/>
						2014년 : KAIST 기술혁신포상 수상<br/>
						2015년 : 세계 2번째, 국내 최초로 영상 변형 탐지 서비스 공개 운영<br/>
						2018년 : 과학기술정보통신부 개최 2018년 인공지능 R&D 챌린지<br/>
						                 ‘합성사진찾기’ 경진대회 3위 입상<br/>

      				</Typography>
      			</Paper>
      		</Grid>
      	</Grid>
      	<Grid 
      		item 
      		xs>
      		<Paper className={classes.greeting} elevation={3}>
      			<Typography align='left' className={classes.greetingText}>
      			기술자문/창업자 메시지<br/>
				㈜디지탈이노텍은 2000년 KAIST 전산학부 이흥규 교수에 의해 실험실 창업기업으로 당시 박사과정 학생들과 함께 창업한 회사이다. 창업초기에는 디지털워터마킹 기술을 사용한 저작권보호기술에 주력하여, 다수의 저작권보호 솔루션을 한국전자통신연구원을 비롯하여 다수의 기관에 납품 및 판매하였다. 2010년 중반 부터는 영상 변형에 관심을 가지고 기술 개발을 시작하였으며, 2020년 현재 보유한 영상 변형 탐지 기술은 미국, 유럽 등의 전문 연구기관과 대등하며 국내에서는 독보적인 기술 수준을 보여주고 있다.<br/><br/>
				출시한 KAI_Forensic 2.0은 2015년 세계에서는 2번째, 국내에서는 최초로 일반에 제공한 영상 변형 탐지 공개 서비스에서 수집한 수십만장의 영상들을 이용하여 실환경에서의 영상 변형 탐지에 적합한 정지영상/동영상 변형 탐지 전문 솔루션이다. 향후에도 지속적으로 전통적인 포렌식 기술과 인공지능기술을 체계적으로 융합한 통합 영상 변형 탐지 기술의 고도화된 버젼들을 제공할 예정이다.<br/>
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