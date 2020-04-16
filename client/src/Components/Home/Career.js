import React from 'react';
import { Grid, Typography, Button, withStyles } from '@material-ui/core';

import styles from './home.module.css';

const ColorButton = withStyles((theme) => ({
	root: {
		color: theme.palette.common.white,
		borderColor: theme.palette.common.white
	}
}))(Button);

function Career() {
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
						The world of law is evolving. Seize the opportunities. At Allen & Overy, we work at the
						forefront of our profession, breaking new ground and shaping an industry. Now, we want you to
						join us.
					</Typography>
				</Grid>
				<Grid item>
					<ColorButton variant="outlined">Apply Now</ColorButton>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default Career;