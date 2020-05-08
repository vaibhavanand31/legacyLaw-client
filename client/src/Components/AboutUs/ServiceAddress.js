import React from 'react';
import { Button, Typography, Grid } from '@material-ui/core';
import styles from './aboutUs.module.css';

function ServiceAddress() {
	return (
		<div className={styles.addressContainer}>
			<div className={styles.innerText}>
				<Grid container direction="column" justify="center" alignItems="center" spacing={1}>
					<Grid item>
						<Typography variant="h6">Office Type</Typography>
					</Grid>
					<Grid item>
						<Typography variant="body2">street address city state</Typography>
					</Grid>
					<Grid item>
						<Typography variant="caption">pin code</Typography>
					</Grid>
					<Grid item>
						<Button variant="outlined">Navigate</Button>
					</Grid>
				</Grid>
			</div>
		</div>
	);
}
export default ServiceAddress;
