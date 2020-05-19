import React, { useState, useEffect } from 'react';
import { Paper, Typography, Grid } from '@material-ui/core';
import Practise from './Practise';
import styles from './staff.module.css';
import axios from 'axios';

function Expertise() {
	const [ practiseAreas, setPractiseAreas ] = useState([]);

	useEffect(() => {
		axios
			.get('http://127.0.0.1:8000/panda/practicing-area/')
			.then((response) => {
				setPractiseAreas(response.data.results);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);
	return (
		<div className={styles.staffMain}>
			<div className={styles.background}>
				<img className={styles.banner} src={require('../../images/expertise.jpg')} alt="background" />
			</div>
			<div className={styles.upperLayout}>
				<Paper elevation={3} className={styles.upperLayoutPaper}>
					<div className={styles.titleConatiner}>
						<Typography variant="h4">Expertise</Typography>
					</div>
					<div className={styles.decsriptionContainer}>
						<Typography variant="body1">
							The Legacy Law is engaged in diverse areas of Law Practice which exclusively focuses on
							extending its soulful services in handling an array of complex cases involving diverse and
							complex matters related to Corporate Laws and Commercial Laws, Mergers, Acquisitions ,
							Banking Laws, Family and Matrimonial Laws, Consumer Laws, Criminal Laws, Carrier Laws, Cyber
							Security and Information Technology Law, Electricity Laws, Environmental Laws, Laws
							governing different areas of trade and industry, Arbitration Laws, Insurance Laws,
							Intellectual Property Laws, Labour and Industrial Laws, Land and Revenue Laws, Real
							Estate/RERA and Property Laws and other general laws. The Firm also provides the Services of
							Compliance and Due Diligence. The Legacy Law also extends its services for Drafting and
							Vetting of all types of Contracts and Agreements.
						</Typography>
					</div>
				</Paper>
			</div>
			<div className={styles.practiseContainer}>
				<Grid container className={styles.practise}>
					{practiseAreas.map((practiseArea) => (
						<Grid className={styles.practiseEach} item sm={6} key={practiseArea.id}>
							<Practise practiseArea={practiseArea} />
						</Grid>
					))}
				</Grid>
			</div>
		</div>
	);
}

export default Expertise;
