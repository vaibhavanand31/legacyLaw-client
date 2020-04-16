import React from 'react';
import { Hidden, Grid } from '@material-ui/core';

import styles from './home.module.css';
import MeetPeople from './MeetPeople';

function People() {
	return (
		<div className={styles.people}>
			<Hidden smDown>
				<div className={styles.peopleBackGround}>
					<MeetPeople />
				</div>
			</Hidden>
			<Hidden mdUp>
				<Grid style={{ padding: '20px' }} container direction="row" justify="center" alignItems="center">
					<Grid item>
						<MeetPeople />
					</Grid>
				</Grid>
			</Hidden>
		</div>
	);
}

export default People;
