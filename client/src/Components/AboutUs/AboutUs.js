import React, { useState, useEffect } from 'react';
import { Paper, Typography, Grid } from '@material-ui/core';
import styles from './aboutUs.module.css';
import ServiceAddress from './ServiceAddress';
import axios from 'axios';

function AboutUs() {
	const [ addresses, setAddress ] = useState([]);

	useEffect(() => {
		axios
			.get('http://127.0.0.1:8000/about-us/service-address/')
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
	}, []);

	var today = new Date();
	var currentYear = today.getFullYear();

	const startYear = 1981;

	return (
		<div className={styles.aboutusMain}>
			<div className={styles.background}>
				<img className={styles.banner} src={require('../../images/aboutUsNew1.jpg')} alt="background" />
			</div>
			<div className={styles.upperLayout}>
				<Paper elevation={3} className={styles.upperLayoutPaper}>
					<div className={styles.titleConatiner}>
						<Typography variant="h4">About Us</Typography>
					</div>
					<div className={styles.decsriptionContainer}>
						<Typography variant="body1">
							The Legacy Law takes forward the professional lineage of Sh. Jatinder Singh Advocate, as a
							Founding Partner of the firm, who brings an illustrious experience of{' '}
							<span style={{ fontWeight: 'bold' }}>{currentYear - startYear}</span> years in the
							profession.
						</Typography>
						<br />
						<Typography variant="body1">
							Our years of experience is coupled with innovative thinking and client focussed approach in
							order to reach the best solution for our clients. We remain on the cutting edge of the legal
							developments, taking the time to study, track and anticipate changes in regulations that
							could impact our clients. We at Legacy Law are always striving to improve by putting are
							best efforts forward in order to assist our clients.{' '}
						</Typography>
						<br />
						<Typography variant="body1">
							The aim of the firm is to provide clear, concise and practical advice with time bound
							deliverables to support its clients’ business objectives. Its innovative and pragmatic
							solutions extend beyond practices and borders, to suit clients' business needs. The firm's
							global perspective is based on its knowledge of the sector/industry, local laws and customs.
							The team of lawyers and professionals understand issues across a broad spectrum of business
							and legal practice. This clarity allows the firm to bring the right talent and knowledge to
							deliver commercially pragmatic advice.
						</Typography>
					</div>
				</Paper>
			</div>
			<div className={styles.addressSection}>
				<Grid container justify="center" alignItems="center" spacing={4}>
					{addresses.map((address) => (
						<Grid item key={address.id}>
							<ServiceAddress address={address} />
						</Grid>
					))}
				</Grid>
			</div>
		</div>
	);
}

export default AboutUs;
