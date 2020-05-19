import React, { useState, useEffect } from 'react';
import { Typography, Grid } from '@material-ui/core';
import AdvocatesCard from './AdvocatesCard';
import style from './staff.module.css';
import axios from 'axios';

function Staff() {
	const [ peoples, setPeoples ] = useState([]);

	useEffect(() => {
		axios
			.get('http://127.0.0.1:8000/panda/partners/')
			.then((response) => {
				setPeoples(response.data.results);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<div className={style.advocatesMain}>
			<div className={style.pageTitle}>
				<Typography variant="h4">Partners & Associates</Typography>
			</div>
			<div className={style.people}>
				<Grid container direction="row" justify="center" alignItems="center" spacing={3}>
					{peoples.map((people) => (
						<Grid item key={people.id}>
							<AdvocatesCard people={people} />
						</Grid>
					))}
				</Grid>
			</div>
		</div>
	);
}

export default Staff;
