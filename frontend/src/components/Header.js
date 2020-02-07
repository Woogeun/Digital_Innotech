import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Logo from '.././assets/mmc_logo.png';
import Banner from '.././assets/light_banner1.jpg';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles(theme => ({
  toolbarTitle: {
    flex: 1,
  },
  toolbar: {
  	margin: theme.spacing(3, 0, 0, 0),
    justifyContent: 'space-around',
    overflowX: 'auto',
  },
  toolbarSecondary: {
    padding: theme.spacing(3, 0, 0, 0),
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarLink: {
    padding: theme.spacing(3, 3),
    flexShrink: 0,
  },
  divider: {
    margin: theme.spacing(1, 0, 0, 0)
  }
}));

export default function Header(props) {
  const classes = useStyles();
  const { sections, title } = props;

  return (
    <React.Fragment>
      <Grid container justify="center">
        <Grid item xs={10} sm={10}>
          <Toolbar component="nav" variant="dense" className={classes.toolbar}>
            <img src={Logo}/>
            <spacer/>
            <spacer/>
            <Grid container justify="flex-end" className={classes.toolbarSecondary}>
	            {sections.map(section => (
	            	<Grid item xs={2} sm={2}>
		              <Button
		              	fullWidth={true}
		              	size="medium"
		                key={section.title}
		                href={section.url}
		              >
		                {section.title}
		              </Button>
	              </Grid>
                
	            ))}
            </Grid>
          </Toolbar>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
