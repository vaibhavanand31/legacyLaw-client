import React from 'react';
import { Button, Typography, Grid } from '@material-ui/core';
import styles from './aboutUs.module.css';

function ServiceAddress(address) {
	return (
		<div className={styles.addressContainer}>
			<div className={styles.innerText}>
				<Grid container direction="column" justify="center" alignItems="center" spacing={1}>
					<Grid item>
						<Typography variant="h6">
							{address.address.address_type ? address.address.address_type : ''}
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant="body2">
							{address.address.street_address ? address.address.street_address : ''}{' '}
							{address.address.city ? address.address.city : ''}{' '}
							{address.address.state ? address.address.state : ''}
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant="caption">
							{address.address.pincode ? address.address.pincode : ''}
						</Typography>
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
