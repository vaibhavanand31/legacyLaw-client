import React from 'react';
import { Grid, Typography, Button, withStyles } from '@material-ui/core';

import styles from './home.module.css';
import { useHistory } from 'react-router-dom';

const ColorButton = withStyles((theme) => ({
	root: {
		color: theme.palette.common.white,
		borderColor: theme.palette.common.white
	}
}))(Button);

function Career() {
	const history = useHistory();
	return (
		<Grid className={styles.career} container direction="row" justify="flex-start" alignItems="center">
			<Grid
				item
				container
				className={styles.careerInner}
				direction="column"
				xs={12}
				sm={9}
				md={7}
				lg={5}
				justify="center"
				spacing={3}
			>
				<Grid item>
					<Typography variant="h6">CAREERS</Typography>
				</Grid>
				<Grid item>
					<Typography variant="h3">Take your next step</Typography>
				</Grid>
				<Grid item>
					<Typography variant="body1">
						Welcome to a bold new way of working. Colleagues building new levels of confidence. Clients
						finding new levels of trust.We’re certain you’ve never experienced collaboration like this
						before. But then, you won’t have experienced a law firm like The Legacy Law either.
					</Typography>
				</Grid>
				<Grid item>
					<ColorButton
						onClick={() => {
							history.push('/hr/career');
						}}
						variant="outlined"
					>
						Apply Now
					</ColorButton>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default Career;
