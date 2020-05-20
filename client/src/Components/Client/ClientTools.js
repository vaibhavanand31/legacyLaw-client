import React, { useState, useEffect, useContext } from 'react';
import styles from './client.module.css';
import { Paper, Typography, Grid } from '@material-ui/core';
// import Appointment from './Appointment';
import ContactUs from './ContactUs';
import ServiceAddress from '../AboutUs/ServiceAddress';
// import Testimonial from './Testimonial';
import axios from 'axios';
import { BackendUrl } from '../../App';

function ClientTools() {
	const baseUrl = useContext(BackendUrl);
	const [ addresses, setAddress ] = useState([]);

	useEffect(
		() => {
			axios
				.get(`${baseUrl}/about-us/service-address/`)
				.then((response) => {
					if (response.status === 200) {
						setAddress(response.data.results);
					} else {
						console.log('data fetch error');
					}
				})
				.catch((error) => {
					console.log(error);
				});
		},
		[ baseUrl ]
	);

	return (
		<div>
			<section>
				<div className={styles.background}>
					<img className={styles.banner} src={require('../../images/contactUsNew.jpg')} alt="background" />
				</div>
				<div className={styles.upperLayout}>
					<Paper elevation={3} className={styles.upperLayoutPaper}>
						<div className={styles.decsriptionContainer}>
							<Typography style={{ fontFamily: 'Lucida Console', fontSize: '1.5rem' }}>
								The Legacy Law
							</Typography>
							<Typography style={{ fontFamily: 'Lucida Console', fontSize: '1.8rem' }}>
								Lets connect to our Lawyers to serve you.
							</Typography>
							{/* <Typography style={{ fontFamily: 'Lucida Console', fontSize: '1.2rem' }}>
								"We try to make world a secure place to live."
							</Typography> */}
						</div>
					</Paper>
				</div>
				<div className={styles.notices}>
					<Paper elevation={3} style={{ backgroundColor: '#eae2e2' }}>
						<div className={styles.notice}>
							<Typography variant="body2">
								Now you can check your case status online. Visit
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="https://services.ecourts.gov.in/ecourtindia_v6/"
									style={{ textDecoration: 'none' }}
								>
									<span> ECOURTS SERVICE PORTAL </span>
								</a>
								for latest updates. In case you have any issues please feel free to contact us.
							</Typography>
						</div>
					</Paper>
				</div>
			</section>
			<section className={styles.clientSection} id="contact-us">
				<ContactUs />
			</section>
			<div className={styles.addressSection}>
				<Grid container justify="center" alignItems="center" spacing={4}>
					{addresses.map((address) => (
						<Grid item key={address.id}>
							<ServiceAddress address={address} />
						</Grid>
					))}
				</Grid>
			</div>
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
