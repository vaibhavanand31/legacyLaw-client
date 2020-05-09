import React from 'react';
import { FormControl, TextField, makeStyles, Button, Grid, Hidden, Typography } from '@material-ui/core';
import styles from './client.module.css';

const useStyles = makeStyles((theme) => ({
	formControl: {
		'& > *': {
			margin: theme.spacing(1),
			minWidth: 200
		}
	}
}));

function ContactUs() {
	const classes = useStyles();
	return (
		<div className={styles.contactUs}>
			<Grid container direction="column" jutify="center" alignItems="center">
				<Grid item>
					<Typography variant="h5">Solving your legal puzzle</Typography>
				</Grid>
			</Grid>
			<form className={styles.applyNowForm} noValidate autoComplete="off">
				<Hidden smDown>
					<Grid container direction="column" justify="center" alignItems="center">
						<Grid item container direction="row" justify="center" alignItems="center">
							<Grid item>
								<FormControl className={classes.formControl}>
									<TextField id="name" label="Name" required variant="outlined" type="text" />
								</FormControl>
							</Grid>
							<Grid item>
								<FormControl className={classes.formControl}>
									<TextField id="email" label="Email" required variant="outlined" type="text" />
								</FormControl>
							</Grid>
							<Grid item>
								<FormControl className={classes.formControl}>
									<TextField id="contact" label="Contact" required variant="outlined" type="text" />
								</FormControl>
							</Grid>
						</Grid>

						<FormControl className={classes.formControl} style={{ minWidth: 650 }}>
							<TextField
								id="query"
								label="Query"
								required
								variant="outlined"
								type="text"
								multiline
								rows={12}
							/>
						</FormControl>
						<FormControl>
							<Button type="submit" variant="outlined">
								Submit Query
							</Button>
						</FormControl>
					</Grid>
				</Hidden>
				<Hidden smUp>
					<FormControl className={classes.formControl}>
						<TextField id="name" label="Name" required variant="outlined" type="text" />
					</FormControl>
					<FormControl className={classes.formControl}>
						<TextField id="email" label="Email" required variant="outlined" type="text" />
					</FormControl>
					<FormControl className={classes.formControl}>
						<TextField id="contact" label="Contact" required variant="outlined" type="text" />
					</FormControl>
					<FormControl className={classes.formControl}>
						<TextField
							id="query"
							label="Query"
							required
							variant="outlined"
							type="text"
							multiline
							rows={12}
						/>
					</FormControl>
					<FormControl className={classes.formControl}>
						<Button type="submit" variant="outlined">
							Submit Query
						</Button>
					</FormControl>
				</Hidden>
			</form>
		</div>
	);
}

export default ContactUs;
