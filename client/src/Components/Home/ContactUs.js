import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import styles from './home.module.css';
import { useHistory } from 'react-router-dom';

function ContactUs() {
	const history = useHistory();
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
						With our unmatched national network of lawyers and consultants, we support our clients whenever
						they need legal assistance.
					</Typography>
				</Grid>
				<Grid item>
					<Button
						variant="outlined"
						onClick={() => {
							history.push('/client-tools#contact-us');
						}}
					>
						Discover more
					</Button>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default ContactUs;
