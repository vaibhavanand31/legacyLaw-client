import React from 'react';
import styles from './client.module.css';
import { Paper, Typography } from '@material-ui/core';
// import Appointment from './Appointment';
import ContactUs from './ContactUs';
// import Testimonial from './Testimonial';

function ClientTools() {
	return (
		<div>
			<section>
				<div className={styles.background}>
					<img className={styles.banner} src={require('../../images/aboutus.jpg')} alt="background" />
				</div>
				<div className={styles.upperLayout}>
					<Paper elevation={3} className={styles.upperLayoutPaper}>
						<div className={styles.decsriptionContainer}>
							<Typography variant="subtitle1">The Legacy Law</Typography>
							<Typography variant="h5">
								Lets connect to group of professional laywers and atorneys.
							</Typography>
							<Typography variant="body2">"We try to make world a secure place to live."</Typography>
						</div>
					</Paper>
				</div>
				<div className={styles.notices}>
					<Paper elevation={3} style={{ backgroundColor: '#eae2e2' }}>
						<div className={styles.notice}>
							<Typography variant="body2">
								Now you can check your case status online visit ECOURTS SERVICE portal for lastes
								updates
								<a
									target="_blank"
									href="https://services.ecourts.gov.in/ecourtindia_v6/"
									style={{ textDecoration: 'none' }}
								>
									<span> VISIT ECOURTS. </span>
								</a>
								<Typography variant="caption">
									Make sure you have your CNR number. Incase you don't have it please contact us.
								</Typography>
							</Typography>
						</div>
					</Paper>
				</div>
			</section>
			<section className={styles.clientSection} id="contact-us">
				<ContactUs />
			</section>
			{/* <section className={styles.clientSection} id="appointment">
				<Appointment />
			</section>
			<section className={styles.clientSection} id="testimonial">
				<Testimonial />
			</section> */}
		</div>
	);
}

export default ClientTools;
