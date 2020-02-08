import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        2019 V PLUS LAB INC. ALL RIGHTS RESERVED.
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    // marginTop: theme.spacing(8),
    padding: theme.spacing(3, 0),
  },
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        {/*<Typography variant="subtitle1" align="center" gutterBottom>
          Multimedia Computing Laboratory
        </Typography>*/}
        <Typography variant="body2" align="center" color="textSecondary" component="p">
          대전광역시 유성구 문화원로 119, 7층 #714  대표 이메일 : heunglee@kaist.ac.kr<br/>
          Copyright  Ⅳⓒ 2020 Digital Innotech INC. All Rights Reversed<br/>
          우리은행 270-116160-13-001 ㈜디지탈이노텍
        </Typography>
        {/*<Copyright />*/}
      </Container>
    </footer>
  );
}
