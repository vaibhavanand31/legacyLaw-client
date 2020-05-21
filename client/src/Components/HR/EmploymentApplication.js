import React, { useState, useEffect, useRef } from 'react';
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
import useInput from '../hooks/useInput';

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

const scrollToRef = (ref) =>
	window.scrollTo({
		top: ref.current.offsetTop,
		left: 0,
		behavior: 'smooth'
	});

export default function EmploymentApplication() {
	const classes = useStyles();
	const contactRef = useRef(null);
	const executeScroll = () => scrollToRef(contactRef);

	useEffect(() => {
		window.scrollTo({
			top: 1,
			left: 0
		});
	}, []);
	const [ errorMessage, setErrorMessage ] = useState('');

	const [ readMoreValue, setReadMoreValue ] = useState();

	const handleReadMoreChange = (newValue) => {
		if (newValue === readMoreValue) {
			setReadMoreValue(0);
		} else {
			setReadMoreValue(newValue);
		}
	};

	const [ fname, bindFname, resetFname ] = useInput('');
	const [ lname, bindLname, resetLname ] = useInput('');
	const [ email, bindEmail, resetEmail ] = useInput('');
	const [ phone, bindPhone, resetPhone ] = useInput('');
	const [ exp, bindExp, resetExp ] = useInput('');

	const handelApplYNowSubmit = (event) => {
		event.preventDefault();
		const applyFormDetails = { fname, lname, email, phone, exp };
		if (!bindFname.error && !bindLname.error && !bindPhone.error && !bindEmail.error && !bindExp.error) {
			if (
				fname.length !== 0 &&
				email.length !== 0 &&
				phone.length !== 0 &&
				lname.length !== 0 &&
				exp.length !== 0
			) {
				applyFormDetails.fname = fname;
				applyFormDetails.lname = lname;
				applyFormDetails.email = email;
				applyFormDetails.phone = phone;
				applyFormDetails.exp = exp;
				setErrorMessage('');
				resetFname();
				resetLname();
				resetEmail();
				resetPhone();
				resetExp();
			} else {
				setErrorMessage('Please fill all required fields');
			}
		}
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
							Make it to top <Hidden smDown>together</Hidden>
						</Typography>
						<Hidden smDown>
							<Typography variant="h3" className={styles.careerSlogan}>
								It's Time.
							</Typography>
						</Hidden>
					</Grid>
					<Grid className={styles.careerApplyNow}>
						<ColorButton onClick={executeScroll} variant="outlined">
							Apply now
						</ColorButton>
					</Grid>
				</Grid>
			</section>
			<section id="why-us" className={styles.careerWhyUs}>
				<div className={styles.whyUsTitle}>
					<center>
						<Typography variant="h4">Why The Legacy Law</Typography>
					</center>
				</div>
				<div className={styles.whyUsrow}>
					<Grid container direction="row" justify="space-evenly" alignItems="center">
						<Grid item className={styles.whyUscol} style={{ minWidth: '230px' }}>
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
											<Typography variant="body2">
												The Legacy Law provides sophisticated guidance and legal counsel to its
												clients that face complex environmental law problems. Our attorneys are
												at the top of the industry and are well-positioned to help across the
												India resolve day-to-day and long-term challenges. Our lawyers leverage
												extensive backgrounds and experience in industry, law and science to
												help our clients’ achieve their most critical objectives. We are
												passionate about the work we do and are well-recognized for our dynamic
												advocacy and unwavering dedication to our clients.
											</Typography>
										</BackGroundPaper>
									</div>
								</Grid>
							)}
						</Hidden>
						<Grid item className={styles.whyUscol} style={{ minWidth: '230px' }}>
							<div className={styles.whyUscolSubHeading}>
								<h3>Our Focus</h3>
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
											<Typography variant="body2">
												The Legacy Law is a law firm focused exclusively on meeting the needs of
												our clients. Our attorneys understand the diverse legal, business and
												financial issues our clients face and we immerse ourselves in their
												businesses so that we can anticipate, manage and mitigate risks and
												challenges that may be on the horizon. We view our role as helping our
												clients and their in-house counsel successfully navigate the complex
												regulatory system that impacts their day-to-day and long-term go
											</Typography>
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
									<Typography variant="body2">
										The Legacy Law provides sophisticated guidance and legal counsel to its clients
										that face complex environmental law problems. Our attorneys are at the top of
										the industry and are well-positioned to help across the India resolve day-to-day
										and long-term challenges. Our lawyers leverage extensive backgrounds and
										experience in industry, law and science to help our clients’ achieve their most
										critical objectives. We are passionate about the work we do and are
										well-recognized for our dynamic advocacy and unwavering dedication to our
										clients.
									</Typography>
								</BackGroundPaper>
							)}
							{readMoreValue === 'panIndiaFocus' && (
								<BackGroundPaper elevation={2} variant="outlined">
									<Typography variant="body2">
										The Legacy Law is a law firm focused exclusively on meeting the needs of our
										clients. Our attorneys understand the diverse legal, business and financial
										issues our clients face and we immerse ourselves in their businesses so that we
										can anticipate, manage and mitigate risks and challenges that may be on the
										horizon. We view our role as helping our clients and their in-house counsel
										successfully navigate the complex regulatory system that impacts their
										day-to-day and long-term go
									</Typography>
								</BackGroundPaper>
							)}
						</div>
					</Hidden>
				</div>
			</section>
			<section ref={contactRef} className={styles.applyNow} style={{ textAlign: 'center' }}>
				<center>
					<Typography variant="h4"> Apply Now</Typography>
					<Typography variant="caption" style={{ color: 'blue' }}>
						{errorMessage}
					</Typography>
				</center>
				<form
					style={{ position: 'relative', display: 'inline-block' }}
					className={styles.applyNowForm}
					noValidate
					autoComplete="off"
					onSubmit={handelApplYNowSubmit}
				>
					<div>
						<FormControl className={classes.formControl}>
							<TextField
								id="fname"
								label="First Name"
								required
								variant="outlined"
								type="text"
								{...bindFname}
							/>
						</FormControl>
						<FormControl className={classes.formControl}>
							<TextField
								id="lname"
								label="Last Name"
								required
								variant="outlined"
								type="text"
								{...bindLname}
							/>
						</FormControl>
						<FormControl className={classes.formControl}>
							<TextField
								id="email"
								label="Email"
								required
								variant="outlined"
								type="text"
								{...bindEmail}
							/>
						</FormControl>
					</div>
					<div>
						<FormControl className={classes.formControl}>
							<TextField
								id="phone"
								label="Contact"
								required
								variant="outlined"
								type="text"
								{...bindPhone}
							/>
						</FormControl>

						<FormControl className={classes.formControl}>
							<TextField
								id="exp"
								label="Experience in Years"
								required
								variant="outlined"
								type="text"
								{...bindExp}
							/>
						</FormControl>
						<FormControl variant="outlined" className={classes.formControl}>
							<InputLabel htmlFor="designation">Designation</InputLabel>
							<Select id="designation" label="Designation" name="designation">
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
								id="cv"
								type="file"
								aria-describedby="component-helper-text"
							/>
							<label htmlFor="resume">
								<Button variant="outlined">
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
