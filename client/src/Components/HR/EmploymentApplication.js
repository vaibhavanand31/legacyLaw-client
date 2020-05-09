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
	TextField,
	Select,
	InputLabel,
	FormHelperText,
	MenuItem
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
			margin: theme.spacing(1),
			minWidth: 200
		}
	},
	selectEmpty: {
		marginTop: theme.spacing(2)
	},
	readMore: {
		color: '#c30303'
	}
}));

const designations = [
	{
		name: 'Sr Associate',
		value: 'Sr Associate'
	},
	{
		name: 'Jr Associate',
		value: 'Jr Associate'
	},
	{
		name: 'Assistant',
		value: 'Assistant'
	},
	{
		name: 'Legal Intern',
		value: 'Legal Intern'
	}
];

export default function EmploymentApplication() {
	const classes = useStyles();

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
								<Button className={classes.readMore} onClick={() => handleReadMoreChange('whatWeDo')}>
									Read More+
								</Button>
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
								<Button
									className={classes.readMore}
									onClick={() => handleReadMoreChange('cultureAndValues')}
								>
									Read More+
								</Button>
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
								<Button
									className={classes.readMore}
									onClick={() => handleReadMoreChange('panIndiaFocus')}
								>
									Read More+
								</Button>
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
								setApplyNowInput({ ...applyNowInput, firstName: e.target.value });
							}}
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
								setApplyNowInput({ ...applyNowInput, lastName: e.target.value });
							}}
						/>
					</FormControl>
					<FormControl className={classes.formControl}>
						<TextField
							id="email"
							label="Email"
							required
							variant="outlined"
							type="text"
							value={applyNowInput.email}
							onChange={(e) => {
								setApplyNowInput({ ...applyNowInput, email: e.target.value });
							}}
						/>
					</FormControl>
					<div>
						<FormControl className={classes.formControl}>
							<TextField
								id="contact"
								label="Contact"
								required
								variant="outlined"
								type="text"
								value={applyNowInput.phone}
								onChange={(e) => {
									setApplyNowInput({ ...applyNowInput, phone: e.target.value });
								}}
							/>
						</FormControl>

						<FormControl className={classes.formControl}>
							<TextField
								id="experience"
								label="Experience"
								required
								variant="outlined"
								type="text"
								value={applyNowInput.experience}
								onChange={(e) => {
									setApplyNowInput({ ...applyNowInput, experience: e.target.value });
								}}
							/>
						</FormControl>
						<FormControl variant="outlined" className={classes.formControl}>
							<InputLabel htmlFor="designation">Designation</InputLabel>
							<Select
								id="designation"
								label="Designation"
								value={applyNowInput.designation}
								onChange={(e) => {
									setApplyNowInput({ ...applyNowInput, designation: e.target.value });
								}}
								name="designation"
							>
								{designations.map((des) => (
									<MenuItem key={des.value} value={des.value}>
										{des.name}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</div>
					<div>
						<FormControl className={classes.formControl}>
							<input
								accept="application/pdf"
								style={{ display: 'none' }}
								id="resume"
								type="file"
								value={applyNowInput.resume}
								onChange={(e) => {
									setApplyNowInput({ ...applyNowInput, resume: e.target.value });
								}}
								aria-describedby="component-helper-text"
							/>
							<label htmlFor="resume">
								<Button variant="outlined" component="span">
									<span style={{ color: '#777' }}>Upload CV</span>
								</Button>
							</label>
							<FormHelperText id="component-helper-text">Kindly Upload Your CV</FormHelperText>
						</FormControl>
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
