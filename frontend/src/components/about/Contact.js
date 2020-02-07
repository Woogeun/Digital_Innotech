import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  title: {
    margin: theme.spacing(12, 50, 0, 50),
    textAlign: 'center',
  },
  titleP: {
    fontFamily: 'Times New Roman'
  },
  subtitleP: {
    fontFamily: 'Times New Roman',
    margin: theme.spacing(3, 0, 0, 0),
    textAlign: 'left'
  },
  bodyP: {
    margin: theme.spacing(6, 0, 4, 2),
    textAlign: 'left'    
  },
  map: {
    border: 0,
    margin: theme.spacing(8, 0),
    textAlign: 'center'
  },
  light: {
    backgroundColor: "white",
    padding: theme.spacing(2),
    textAlign: 'left'
  },
  dark: {
    backgroundColor: "#FAFAFA",
    padding: theme.spacing(2),
    textAlign: 'left'
  }
}));

export default function Contact() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div>
      <div className={classes.title}>
        <Typography color="textPrimary" variant="h5">
          <p className={classes.titleP}>
            Contact Us
          </p>
        </Typography>
        <div className={classes.bodyP}>
          <div className={classes.light}>
            <Typography color="textSecondary" variant="title">
              <p className={classes.subtitleP}>
                Office
              </p>
              <Divider light variant="inset" />
            </Typography>
            <p>
              Main &nbsp; Room #4438 <br/>
              Lab &nbsp; Room #4431 and #4430<br/>
              <br/>
              대전광역시 유성구 구성동 대학로 291 
              한국과학기술원 정보전자공학동(E3)<br/>
              School of Computing(E3), 
              KAIST, 
              291 Daehak-ro, 
              Yuseong-gu, Daejeon, 34141,
              South Korea <br/>
            </p>
          </div>
          <div className={classes.dark}>
            <Typography color="textSecondary" variant="title">
              <p className={classes.subtitleP}>
                Contact
              </p>
              <Divider light variant="inset" />
            </Typography>
            <p>
              Phone &nbsp; +82-42-350-7826 <br/>
              Fax &nbsp; +82-350-8144
            </p>
          </div>
          <div className={classes.map}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3212.6629028506736!2d127.3630535149582!3d36.36894329955616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35654bc8c3c3def1%3A0x27257b4704bed99e!2zS0FJU1Qg7KCV67O07KCE7J6Q6rO17ZWZ64-ZKEUzKQ!5e0!3m2!1sko!2skr!4v1580037738855!5m2!1sko!2skr" 
              width="600" 
              height="450" 
              frameborder="0" 
              allowfullscreen="">
            </iframe>
          </div>
        </div>

      </div>
    </div>
  );
};
