import React from 'react';
import { Typography, Button, withStyles, responsiveFontSizes, createMuiTheme, ThemeProvider } from '@material-ui/core';

import styles from './home.module.css';
import { useHistory } from 'react-router-dom';

const ColorButton = withStyles((theme) => ({
	root: {
		color: 'oldlace',
		borderColor: 'oldlace'
	}
}))(Button);

function MeetPeople() {
	const history = useHistory();
	let theme = createMuiTheme();
	theme = responsiveFontSizes(theme);
	return (
		<div className={styles.circle}>
			<div className={styles.circleContent}>
				<ThemeProvider theme={theme}>
					<Typography className={styles.circleContentTitle} variant="h6">
						Meet our people
					</Typography>
				</ThemeProvider>
				<ColorButton
					onClick={() => {
						history.push('/advocates');
					}}
					className={styles.circleContentButton}
					variant="outlined"
				>
					View all
				</ColorButton>
			</div>
		</div>
	);
}

export default MeetPeople;
