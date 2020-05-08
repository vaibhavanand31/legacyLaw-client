import React, { useState } from 'react';
import {
	Grid,
	Typography,
	Button,
	withStyles,
	Hidden,
	Paper,
	FormControl,
	makeStyles,
	TextField
} from '@material-ui/core';
import styles from './career.module.css';

const ColorButton = withStyles((theme) => ({
	root: {
		color: theme.palette.common.white,
		border: '1px solid',
		borderColor: theme.palette.common.white[500],
		'&:hover': {
			backgroundColor: theme.palette.common.white[700]
		}
	}
}))(Button);

const BackGroundPaper = withStyles((theme) => ({
	root: {
		backgroundColor: '#e7eaeb',
		padding: '30px'
	}
}))(Paper);

const useStyles = makeStyles((theme) => ({
	formControl: {
		'& > *': {
			margin: theme.spacing(1)
		}
	}
}));

const designations = [
	{
		value: 'Sr Associate'
	},
	{
		value: 'Jr Associate'
	},
	{
		value: 'Assistant'
	},
	{
		value: 'Legal Intern'
	}
];

export default function EmploymentApplication() {
	const classes = useStyles();
	const applyNowFormError = {
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		experience: '',
		designation: '',
		resume: ''
	};
	const [ readMoreValue, setReadMoreValue ] = useState();
	const [ applyNowInput, setApplyNowInput ] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		experience: '',
		designation: '',
		resume: ''
	});
	const [ formValid, setFormValid ] = useState(false);

	const handleApplyNowValidation = (e) => {
		const { name, value } = e.target;

		switch (name) {
			case 'firstName':
				applyNowFormError.firstName = '312312';
				break;
			case 'lastName':
				applyNowFormError.lastName = value.length <= 1 ? 'Cannot be empty' : '';
				break;
			default:
				break;
		}
		console.log(applyNowFormError);
	};

	const handleReadMoreChange = (newValue) => {
		if (newValue === readMoreValue) {
			setReadMoreValue(0);
		} else {
			setReadMoreValue(newValue);
		}
	};

	const handelApplYNowSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<div className={styles.career}>
			<section id="career-banner" className={styles.careerBackground}>
				<Grid container direction="column" className={styles.careerBackgroundContainer}>
					<Grid item>
						<Typography variant="h6" className={styles.careerTitle}>
							career
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant="h3" className={styles.careerSlogan}>
							Make it to top togther.
						</Typography>
						<Hidden smDown>
							<Typography variant="h3" className={styles.careerSlogan}>
								Its Time.
							</Typography>
						</Hidden>
					</Grid>
					<Grid className={styles.careerApplyNow}>
						<ColorButton variant="outlined">Apply now</ColorButton>
					</Grid>
				</Grid>
			</section>
			<section id="why-us" className={styles.careerWhyUs}>
				<div className={styles.whyUsTitle}>
					<Typography variant="h4">Why The Legacy Law</Typography>
				</div>
				<div className={styles.whyUsrow}>
					<Grid container direction="row" justify="space-between" alignItems="center">
						<Grid item className={styles.whyUscol}>
							<div className={styles.whyUscolSubHeading}>
								<h3>What we do</h3>
							</div>
							<div className={styles.whyUscolSubHeading}>
								<Typography variant="subtitle2">It’s time to stand on a bigger stage.</Typography>
							</div>
							<div className={styles.whyUsMore}>
								<Button onClick={() => handleReadMoreChange('whatWeDo')}>Read More+</Button>
							</div>
						</Grid>
						<Hidden smUp>
							{readMoreValue === 'whatWeDo' && (
								<Grid>
									<div className={styles.whyUsExpanded}>
										<BackGroundPaper elevation={2} variant="outlined">
											<Typography variant="body2">what we do description</Typography>
										</BackGroundPaper>
									</div>
								</Grid>
							)}
						</Hidden>
						<Grid item className={styles.whyUscol}>
							<div className={styles.whyUscolSubHeading}>
								<h3>Culture and values</h3>
							</div>
							<div className={styles.whyUscolSubHeading}>
								<Typography variant="subtitle2">It’s time to find common ground.</Typography>
							</div>
							<div className={styles.whyUsMore}>
								<Button onClick={() => handleReadMoreChange('cultureAndValues')}>Read More+</Button>
							</div>
						</Grid>
						<Hidden smUp>
							{readMoreValue === 'cultureAndValues' && (
								<Grid>
									<div className={styles.whyUsExpanded}>
										<BackGroundPaper elevation={2} variant="outlined">
											<Typography variant="body2">cultureAndValues description</Typography>
										</BackGroundPaper>
									</div>
								</Grid>
							)}
						</Hidden>
						<Grid item className={styles.whyUscol}>
							<div className={styles.whyUscolSubHeading}>
								<h3>Pan India focus</h3>
							</div>
							<div className={styles.whyUscolSubHeading}>
								<Typography variant="subtitle2">It’s time to make the move.</Typography>
							</div>
							<div className={styles.whyUsMore}>
								<Button onClick={() => handleReadMoreChange('panIndiaFocus')}>Read More+</Button>
							</div>
						</Grid>
						<Hidden smUp>
							{readMoreValue === 'panIndiaFocus' && (
								<Grid>
									<div className={styles.whyUsExpanded}>
										<BackGroundPaper elevation={2} variant="outlined">
											<Typography variant="body2">panIndiaFocus description</Typography>
										</BackGroundPaper>
									</div>
								</Grid>
							)}
						</Hidden>
					</Grid>
					<Hidden xsDown>
						<div className={styles.whyUsExpanded}>
							{readMoreValue === 'whatWeDo' && (
								<BackGroundPaper elevation={2} variant="outlined">
									<Typography variant="body2">what we do description</Typography>
								</BackGroundPaper>
							)}
							{readMoreValue === 'cultureAndValues' && (
								<BackGroundPaper elevation={2} variant="outlined">
									<Typography variant="body2">cultureAndValues description</Typography>
								</BackGroundPaper>
							)}
							{readMoreValue === 'panIndiaFocus' && (
								<BackGroundPaper elevation={2} variant="outlined">
									<Typography variant="body2">panIndiaFocus description</Typography>
								</BackGroundPaper>
							)}
						</div>
					</Hidden>
				</div>
			</section>
			<section className={styles.applyNow}>
				<Typography variant="h4"> Apply Now</Typography>
				<form className={styles.applyNowForm} noValidate autoComplete="off" onSubmit={handelApplYNowSubmit}>
					<FormControl className={classes.formControl}>
						<TextField
							id="first-name"
							label="First Name"
							required
							variant="outlined"
							type="text"
							value={applyNowInput.firstName}
							onChange={(e) => {
								handleApplyNowValidation(e);
								setApplyNowInput({ ...applyNowInput, firstName: e.target.value });
							}}
							helperText={applyNowFormError.firstName}
						/>
					</FormControl>
					<FormControl className={classes.formControl}>
						<TextField
							id="last-name"
							label="Last Name"
							required
							variant="outlined"
							type="text"
							value={applyNowInput.lastName}
							onChange={(e) => {
								handleApplyNowValidation(e);
								setApplyNowInput({ ...applyNowInput, lastName: e.target.value });
							}}
							helperText={applyNowFormError.lastName}
						/>
					</FormControl>
					<div>
						<FormControl className={classes.formControl}>
							<Button id="apply-now" type="submit" variant="outlined">
								Apply Now
							</Button>
						</FormControl>
					</div>
				</form>
			</section>
		</div>
	);
}
