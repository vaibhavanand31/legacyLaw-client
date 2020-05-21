import React, { useState, useEffect, useContext } from 'react';
import { Paper, Typography, Grid } from '@material-ui/core';
import Practise from './Practise';
import styles from './staff.module.css';
import axios from 'axios';
import { BackendUrl } from '../../App';

function Expertise() {
	const baseUrl = useContext(BackendUrl);
	const [ practiseAreas, setPractiseAreas ] = useState([]);

	useEffect(
		() => {
			axios
				.get(`${baseUrl}/panda/practicing-area/`)
				.then((response) => {
					setPractiseAreas(response.data.results);
				})
				.catch((error) => {
					console.log(error);
				});
		},
		[ baseUrl ]
	);
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
							The Legacy Law provides sophisticated guidance and legal counsel to its clients that face
							complex legal problems. Our attorneys are at the top of the industry and are well-positioned
							to help across the India resolve day-to-day and long-term challenges. Our lawyers leverage
							extensive backgrounds and experience in industry, law and science to help our clients’
							achieve their most critical objectives. We are passionate about the work we do and are
							well-recognized for our dynamic advocacy and unwavering dedication to our clients.
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
