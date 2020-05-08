import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import AdvocatesCard from './AdvocatesCard';
import style from './staff.module.css';

function Staff() {
	const peoples = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
	return (
		<div className={style.main}>
			<div className={style.pageTitle}>
				<Typography variant="h4">People</Typography>
			</div>
			<div className={style.people}>
				<Grid container direction="row" justify="center" alignItems="center" spacing={3}>
					{peoples.map((people) => (
						<Grid item key={people}>
							<AdvocatesCard />
						</Grid>
					))}
				</Grid>
			</div>
		</div>
	);
}

export default Staff;
