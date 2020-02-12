import React, { useState }  from 'react';
import PropTypes            from 'prop-types';

import { makeStyles, useTheme }			from '@material-ui/core/styles';
import Box 								from '@material-ui/core/Box';
import Card 							from '@material-ui/core/Card';
import CardMedia 						from '@material-ui/core/CardMedia';
import Carousel 						from 'react-material-ui-carousel'
import Grid 							from '@material-ui/core/Grid';
import Paper 							from '@material-ui/core/Paper';

import kai_forensics 	from 'data/kai_forensics.js';
import networkImg1 		from 'assets/network1.png';
import networkImg2 		from 'assets/network2.png';
import networkImg3 		from 'assets/network3.png';
import networkImg4 		from 'assets/network4.png';


const useStyles = makeStyles(theme => ({
	card: {
		backgroundColor: '#FAFAFA',
		margin: theme.spacing(2, 0),
		minHeight: 400,
		display: 'flex',
		justifyContent: "center",
		flexDirection: "column",
	},
	media: {
		opacity: '90%',
		width: '100%',// 16:9
		height: '100%'
	}
}));
							


export default function KAI_Forensics(props) {
	const classes = useStyles();
	const theme = useTheme();
	const imgs = [networkImg1, networkImg2, networkImg3, networkImg4];
	const [handleOpen, setHandleOpen] = useState({ open: false });

	return (
		<Grid container justify='center' spacing={2} >
			
			<Grid item xs={12}>
				<Carousel interval={5000} >
					{ imgs.map(img => {
						return (
							<Paper className={ classes.card }>
								<img src={img} className={ classes.media } />
							</Paper>
							
						);
					})}
				</Carousel>
			</Grid>
			<Grid item xs >
				<Paper square >
					{ kai_forensics.image }
				</Paper>
			</Grid>
			<Grid item xs >
				<Paper square >
					{ kai_forensics.video }
				</Paper>
			</Grid>
		</Grid>
	);
}

KAI_Forensics.defaultProps = {

};

KAI_Forensics.propTypes = {

};
