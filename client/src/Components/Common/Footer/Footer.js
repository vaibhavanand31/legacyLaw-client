import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import styles from './footer.module.css';

function Footer() {
	return (
		<div position="static" className={styles.footer}>
			<Grid container variant="column" justify="center" alignItems="center">
				<Typography variant="overline">
					© Copyright 2020, Singh and Singh Legum Gates | All Rights Reserved.
				</Typography>
			</Grid>
		</div>
	);
}

export default Footer;
