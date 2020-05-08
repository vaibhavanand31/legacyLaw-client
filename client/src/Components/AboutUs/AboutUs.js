import React from 'react';
import { Paper, Typography, Grid } from '@material-ui/core';
import styles from './aboutUs.module.css';
import ServiceAddress from './ServiceAddress';

function AboutUs() {
	const addresses = [ 1, 2, 3, 4, 5 ];
	return (
		<div>
			<div className={styles.background}>
				<img className={styles.banner} src={require('../../images/aboutus.jpg')} alt="background" />
			</div>
			<div className={styles.upperLayout}>
				<Paper elevation={3} className={styles.upperLayoutPaper}>
					<div className={styles.titleConatiner}>
						<Typography variant="h4">About Us</Typography>
					</div>
					<div className={styles.decsriptionContainer}>
						<Typography variant="body1">
							here i start Etiam nunc erat, consectetur sit amet congue sit amet, scelerisque in felis.
							Cras eget ultrices augue. Mauris feugiat ex eget libero malesuada vestibulum. Quisque ac
							purus lacus. Pellentesque ullamcorper at neque a euismod. Duis eget sagittis elit.
							Suspendisse placerat justo ut nulla iaculis pretium. Etiam nunc erat, consectetur sit amet
							congue sit amet, scelerisque in felis. Cras eget ultrices augue. Mauris feugiat ex eget
							libero malesuada vestibulum. Quisque ac purus lacus. Pellentesque ullamcorper at neque a
							euismod. Duis eget sagittis elit. Suspendisse placerat justo ut nulla iaculis pretium. Etiam
							nunc erat, consectetur sit amet congue sit amet, scelerisque in felis. Cras eget ultrices
							augue. Mauris feugiat ex eget libero malesuada vestibulum. Quisque ac purus lacus.
							Pellentesque ullamcorper at neque a euismod. Duis eget sagittis elit. Suspendisse placerat
							justo ut nulla iaculis pretium. Etiam nunc erat, consectetur sit amet congue sit amet,
							scelerisque in felis. Cras eget ultrices augue. Mauris feugiat ex eget libero malesuada
							vestibulum. Quisque ac purus lacus. Pellentesque ullamcorper at neque a euismod. Duis eget
							sagittis elit. Suspendisse placerat justo ut nulla iaculis pretium.
						</Typography>
					</div>
				</Paper>
			</div>
			<div className={styles.addressSection}>
				<Grid container justify="center" alignItems="center" spacing={4}>
					{addresses.map((number) => (
						<Grid item key={number}>
							<ServiceAddress />
						</Grid>
					))}
				</Grid>
			</div>
		</div>
	);
}

export default AboutUs;
