import React from 'react';
import { Button, Typography, Grid } from '@material-ui/core';
import styles from './aboutUs.module.css';

function ServiceAddress(address) {
	return (
		<div className={styles.addressContainer}>
			<div className={styles.innerText}>
				<Grid container direction="column" justify="center" alignItems="center" spacing={2}>
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
							{', '}
							{address.address.pincode ? address.address.pincode : ''}
						</Typography>
					</Grid>
					<Grid item>
						<a
							target="_blank"
							rel="noopener noreferrer"
							style={{ textDecoration: 'none' }}
							href={`https://www.google.com/maps/search/${address.address.street_address},+${address
								.address.city},+${address.address.state}/@`}
						>
							<Button variant="contained" color="default">
								Map Search
							</Button>
						</a>
					</Grid>
				</Grid>
			</div>
		</div>
	);
}
export default ServiceAddress;
