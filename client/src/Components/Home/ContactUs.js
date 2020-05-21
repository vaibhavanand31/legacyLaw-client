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
					<Typography variant="h4">We are here for you</Typography>
				</Grid>
				<Grid item>
					<Typography variant="body1">
						With our unmatched network of lawyers and consultants, we support our clients whenever they need
						any legal assistance.
					</Typography>
					<Typography variant="body2" style={{ padding: '10px 0px 5px 0px' }}>
						HEAD OFFICE:
					</Typography>
					<Typography variant="body2" style={{ padding: '2px 0px' }}>
						Monday - Friday 10:00 AM To 9:00 PM
					</Typography>
					<Typography variant="body2" style={{ padding: '2px 0px' }}>
						Saturday Closed
					</Typography>
					<Typography variant="body2" style={{ padding: '2px 0px' }}>
						Sunday - 12:00 AM To 9:00 PM
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
