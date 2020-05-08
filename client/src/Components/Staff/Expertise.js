import React from 'react';
import { Paper, Typography, Grid } from '@material-ui/core';
import Practise from './Practise';
import styles from './staff.module.css';

function Expertise() {
	const practiseArea = [ 1, 2 ];
	return (
		<div className={styles.staffMain}>
			<div className={styles.background}>
				<img className={styles.banner} src={require('../../images/aboutus.jpg')} alt="background" />
			</div>
			<div className={styles.upperLayout}>
				<Paper elevation={3} className={styles.upperLayoutPaper}>
					<div className={styles.titleConatiner}>
						<Typography variant="h4">Expertise</Typography>
					</div>
					<div className={styles.decsriptionContainer}>
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
			<div className={styles.practiseContainer}>
				<Grid container className={styles.practise}>
					{practiseArea.map((practise) => (
						<Grid className={styles.practiseEach} item sm={6} key={practise}>
							<Practise />
						</Grid>
					))}
				</Grid>
			</div>
		</div>
	);
}

export default Expertise;
