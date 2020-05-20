import React, { useState } from 'react';
import { FormControl, TextField, makeStyles, Button, Grid, Typography } from '@material-ui/core';
import styles from './client.module.css';
import useInput from '../hooks/useInput';

const useStyles = makeStyles((theme) => ({
	formControl: {
		'& > *': {
			margin: theme.spacing(1),
			width: '100%'
		}
	}
}));

function ContactUs() {
	const classes = useStyles();

	const [ errorMessage, setErrorMessage ] = useState('');

	const [ name, bindName, resetName ] = useInput('');
	const [ email, bindEmail, resetEmail ] = useInput('');
	const [ phone, bindPhone, resetPhone ] = useInput('');
	const [ query, bindQuery, resetQuery ] = useInput('');

	const handleSubmit = (e) => {
		e.preventDefault();
		const contactFormDetails = { name, email, phone, query };
		if (!bindName.error && !bindEmail.error && !bindPhone.error && !bindQuery.error) {
			if (name.length !== 0 && email.length !== 0 && phone.length !== 0 && query.length !== 0) {
				console.log('i am ok');
				setErrorMessage('');
				console.log(contactFormDetails);
				setErrorMessage('Thankyou for getting in touch ' + name + ' we will get back to you soon.');
				resetName();
				resetEmail();
				resetPhone();
				resetQuery();
			} else {
				setErrorMessage('Please fill all required fields');
			}
		}
	};

	return (
		<div className={styles.contactUs}>
			<Grid container direction="column" jutify="center" alignItems="center">
				<Grid item>
					<Typography variant="h5">Got a query? We are here to assist.</Typography>
					<Typography variant="caption" style={{ color: 'blue' }}>
						{errorMessage}
					</Typography>
				</Grid>
			</Grid>
			<form onSubmit={handleSubmit} className={styles.applyNowForm} noValidate autoComplete="off">
				<Grid container direction="column" justify="center" alignItems="center">
					<Grid item container direction="row" justify="center" alignItems="center" spacing={1}>
						<Grid item>
							<FormControl className={classes.formControl}>
								<TextField
									id="name"
									label="Name"
									required
									variant="outlined"
									type="text"
									{...bindName}
								/>
							</FormControl>
						</Grid>
						<Grid item>
							<FormControl className={classes.formControl}>
								<TextField
									id="email"
									label="Email"
									required
									variant="outlined"
									type="email"
									{...bindEmail}
								/>
							</FormControl>
						</Grid>
						<Grid item>
							<FormControl className={classes.formControl}>
								<TextField
									id="phone"
									label="Phone"
									required
									variant="outlined"
									type="text"
									{...bindPhone}
								/>
							</FormControl>
						</Grid>
					</Grid>

					<FormControl className={classes.formControl} style={{ maxWidth: '100%', width: 650 }}>
						<TextField
							id="query"
							label="Query"
							required
							variant="outlined"
							type="text"
							multiline
							rows={12}
							{...bindQuery}
						/>
					</FormControl>
					<FormControl>
						<Button type="submit" variant="outlined">
							Submit Query
						</Button>
					</FormControl>
				</Grid>
			</form>
		</div>
	);
}

export default ContactUs;
