import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';

import styles from './home.module.css';

function ContactUs() {
	return (
		<Grid className={styles.contactUs} container direction="row" justify="flex-start" alignItems="center">
			<Grid
				item
				container
				className={styles.contactUsInner}
				direction="column"
				xs={10}
				sm={9}
				md={7}
				lg={5}
				justify="center"
				spacing={3}
			>
				<Grid item>
					<Typography variant="h2">Here to help</Typography>
				</Grid>
				<Grid item>
					<Typography variant="body1">
						With our unmatched national network of lawyers and consiltants, we support our clients whenever
						they do business.
					</Typography>
				</Grid>
				<Grid item>
					<Button variant="outlined">Discover more</Button>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default ContactUs;
